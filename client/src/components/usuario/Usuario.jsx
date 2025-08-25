// original
import { FileOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Layout,
  Menu,
  Modal,
  Select,
  theme,
} from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getFiles,
  setFilesData,
  setFilesDataLogOut,
  setSelectedDate,
  setSelectedKind,
} from "../../redux/filesSlice.js";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.js";
import { getUser, setLogoutData, setUserData } from "../../redux/userSlice.js";
import apiClient from "../../utils/client.js";
import {
  deleteCookie,
  deleteToken,
  getCookie,
  setCookie,
} from "../../utils/cookieUtils.js";
import { getExtensionIcon } from "../../utils/getExtensionIcon.jsx";
import AntdCustomPagination from "../Pagination/Pagination.jsx";
import CookieBanner from "../cookie/CookieBanner.jsx";
import { useFetchKinds } from "../hooks/useFetchKinds.jsx";
import { DownloadIcon } from "../icons/Icons.jsx";
import {
  NotificationFailure,
  NotificationInfo,
  NotificationSuccess,
} from "../notifications/Notifications.jsx";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import esES from 'antd/locale/es_ES.js';
import "dayjs/locale/es.js"
dayjs.locale('es')
import "./Ususario.css";
const { Option } = Select;

function getItem(label, key, icon, children, onClick) {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  };
}

export const Usuario = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const [loading, setLoading] = useState(true);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");
  const [hasFiles, setHasFiles] = useState(false);

  const kinds = useFetchKinds();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const user = useAppSelector(getUser);

  const token = getCookie("token");

  const files = useAppSelector(getFiles);

  const selectedKind = useAppSelector((state) => state.files.selectedKind);
  const selectedDate = useAppSelector((state) => state.files.selectedDate);

  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 10;

  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;

  const { Content, Sider } = Layout;

  const allFiles = files?.files || [];

  useEffect(() => {
    let inactivityTimer;
    let lastActivity = new Date();

    const checkSessionStorageUser = () => {
      const userSessionStorage = sessionStorage.getItem("user");
      if (userSessionStorage) {
        // Si hay un usuario en sessionStorage, establece los datos del usuario y retorna true
        const parsedUser = JSON.parse(userSessionStorage);
        dispatch(setUserData(parsedUser));
        console.log("Datos de sessionStorage cargados correctamente");
        return true;
      }
      return false;
    };

    checkSessionStorageUser();

    const checkCookieUser = () => {
      const userCookie = getCookie("user");
      if (userCookie) {
        const user = JSON.parse(userCookie);
        const currentTime = new Date();
        if (currentTime - new Date(user.expirationTime) > 10 * 60 * 1000) {
          // La cookie ha caducado
          cookieExpiration();
          return false;
        } else {
          // La cookie está válida, actualiza la última actividad
          user.expirationTime = currentTime.toISOString();
          setCookie("user", JSON.stringify(user)); // Actualiza la cookie con el nuevo tiempo de actividad
          return true;
        }
      }
      return false;
    };

    // Si no hay datos en sessionStorage, verificar las cookies y configurar el temporizador de inactividad
    const resetInactivityTimer = () => {
      // Reiniciar el temporizador de inactividad cada vez que el usuario interactúa
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(checkCookieUser, 60000);
      lastActivity = new Date(); // Actualiza la última actividad cuando hay movimiento
    };

    // Configurar un temporizador de inactividad inicial
    resetInactivityTimer();

    // Agregar manejadores de eventos para el mouse y el desplazamiento
    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("scroll", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer); // Agregar evento para teclado

    // Limpia los manejadores de eventos al desmontar el componente
    return () => {
      clearInterval(inactivityTimer);
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("scroll", resetInactivityTimer);
      window.removeEventListener("keydown", resetInactivityTimer); // Remover evento del teclado
    };
  }, []);

  const cookieExpiration = async () => {
    try {
      await apiClient.post("/user/logout");
      dispatch(setLogoutData());
      dispatch(setFilesDataLogOut());
      deleteToken("token");
      deleteCookie("user");
      window.sessionStorage.removeItem("user");
      NotificationInfo(
        "La sesión ha caducado. Por favor, inicie sesión nuevamente."
      );
    } catch (error) {
      NotificationFailure(error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token && user) {
          const { email } = user;
          const { data } = await apiClient.get(`/user/${email}`);
          if (data) {
            const user = {
              email: data.email,
              nombreEmpresa: data.nombreEmpresa,
              cuit: data.cuit,
              nombreSede: data.nombreSede,
              ciudad: data.ciudad,
              direccion: data.direccion,
              telefono: data.telefono,
              userId: data.userId,
              authToken: data.authToken,
              isAdmin: data.isAdmin,
              emailJefe: data.emailJefe,
            };
            dispatch(setUserData(user));
            dispatch(setFilesData(data.files));
            setHasFiles(data.files?.length > 0);
            setLoading(false);
          }
        }
      } catch (error) {
        NotificationFailure(error.response.data.message);
      }
    };
    fetchUserData();
  }, [token, user, dispatch]);

  const handleDownload = async (id, name) => {
    try {
      const response = await apiClient.get(`/file/${id}`, {
        responseType: "blob",
      });

      // Crear un enlace temporal para descargar el archivo
      const url = window.URL.createObjectURL(response.data);
      const link = document.createElement("a");
      link.href = url;
      link.download = name;
      link.click();

      // Liberar los recursos del enlace temporal
      window.URL.revokeObjectURL(url);
    } catch (error) {
      NotificationFailure(error.message);
    }
  };

  const signOff = async () => {
    try {
      const res = await apiClient.post("/user/logout");
      dispatch(setLogoutData());
      dispatch(setFilesDataLogOut());
      deleteToken("token");
      deleteCookie("user");
      window.sessionStorage.removeItem("user");
      navigate("/");
      NotificationSuccess(res.data.message);
    } catch (error) {
      NotificationFailure(response.data.error);
    }
  };

  const items = [
    getItem("Perfil", "1", <UserOutlined />),
    getItem("Archivos", "2", <FileOutlined />),
    getItem("Salir", "3", <LogoutOutlined />, undefined, signOff),
  ];

  const handleMenuItemClick = (key) => {
    setSelectedMenuItem(key);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleKindFilterChange = (value) => {
    dispatch(setSelectedKind(value)); // Actualiza el estado global en Redux
  };

  const handleDateFilterChange = (date) => {
    const formattedDate = date ? date.format("YYYY-MM") : null; // Almacenar la fecha como cadena "YYYY-MM" o null si no hay fecha
    dispatch(setSelectedDate(formattedDate)); // Actualiza el estado global en Redux
  };

  const filteredFiles = allFiles.filter((file) => {
    const fileCreatedAtMoment = moment(file?.createdAt);
    const selectedDateMoment = selectedDate
      ? moment(selectedDate, "YYYY-MM")
      : null;

    return (
      (!selectedKind || file?.kindId.toString() === selectedKind) &&
      (!selectedDateMoment ||
        fileCreatedAtMoment.format("MM/YY") ===
          selectedDateMoment.format("MM/YY"))
    );
  });

  const currentFiles = filteredFiles.slice(indexOfFirstFile, indexOfLastFile);

  const sortedFiles = currentFiles.slice().toSorted((a, b) => {
    const dateA = moment(a.createdAt);
    const dateB = moment(b.createdAt);
    return dateB - dateA;
  });

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const sede = user?.nombreSede.split(" - ")[0];

  const handleChangePassword = async () => {
    try {
      // Enviar el correo electrónico a la dirección de correo de user.emailJefe
      const response = await apiClient.post("/user/changePswUser", {
        emailJefe: resetPasswordEmail,
      });

      setShowChangePasswordModal(false);
      NotificationSuccess(response.data);
    } catch (error) {
      NotificationFailure(error.response.data);
    }
  };

  const handlechangePasswordClick = () => {
    setResetPasswordEmail(user.emailJefe);
    setShowChangePasswordModal(true);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CookieBanner />
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onSelect={({ key }) => handleMenuItemClick(key)}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          {selectedMenuItem === "1" && (
            <>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  maxWidth: 600,
                  margin: "auto",
                  borderRadius: 20,
                  marginTop: "60px",
                }}
              >
                <h3 style={{ marginTop: "20px" }}>Mis datos</h3>
                <Form
                  labelCol={{ span: 10 }}
                  wrapperCol={{ span: 10 }}
                  layout="horizontal"
                  style={{ maxWidth: 1000 }}
                >
                  <div>
                    <Form.Item label="Empresa" htmlFor="nombreEmpresa">
                      <Input
                        style={{ cursor: "default", fontFamily: "Poppins" }}
                        type="text"
                        id="nombreEmpresa"
                        name="nombreEmpresa"
                        value={user.nombreEmpresa}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Establecimiento"
                      htmlFor="nombreEstablecimiento"
                    >
                      <Input
                        style={{ cursor: "default", fontFamily: "Poppins" }}
                        type="text"
                        id="nombreEstablecimiento"
                        name="nombreEstablecimiento"
                        value={sede}
                      />
                    </Form.Item>
                    <Form.Item label="Ciudad" htmlFor="ciudad">
                      <Input
                        style={{ cursor: "default", fontFamily: "Poppins" }}
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        value={user.ciudad}
                      />
                    </Form.Item>
                    <Form.Item label="Dirección" htmlFor="direccion">
                      <Input
                        style={{ cursor: "default", fontFamily: "Poppins" }}
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={user.direccion}
                      />
                    </Form.Item>
                    <Form.Item label="Teléfono" htmlFor="telefono">
                      <Input
                        style={{ cursor: "default", fontFamily: "Poppins" }}
                        type="number"
                        id="telefono"
                        name="telefono"
                        value={user.telefono}
                      />
                    </Form.Item>

                    <Form.Item label="CUIT" htmlFor="cuit">
                      <Input
                        style={{ cursor: "default", fontFamily: "Poppins" }}
                        type="number"
                        id="cuit"
                        name="cuit"
                        value={user.cuit}
                      />
                    </Form.Item>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button type="primary">
                        <a
                          href="#!"
                          onClick={(e) => {
                            e.preventDefault();
                            handlechangePasswordClick();
                          }}
                          style={{
                            textDecoration: "none",
                            fontFamily: "Poppins",
                          }}
                        >
                          Cambiar contraseña
                        </a>
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedMenuItem === "2" && (
              <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                <h3 style={{ marginTop: "20px" }}>Archivos</h3>
                <Form.Item label="Filtrar por tipo" htmlFor="kind">
                  <Select
                    onChange={handleKindFilterChange}
                    value={selectedKind}
                    style={{ maxWidth: "100%" }}
                    placeholder="Tipo de archivos"
                    disabled={!hasFiles}
                  >
                    <Option value="">Todos</Option>
                    {kinds.map((kind) => (
                      <Option key={kind.id} value={kind.id}>
                        {kind.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <div>
                  <Form.Item label="Filtrar por mes" htmlFor="month">
                  <ConfigProvider locale={esES}>
                    <DatePicker
                      style={{ maxWidth: "100%" }}
                      picker="month"
                      onChange={handleDateFilterChange}
                      value={
                        selectedDate ? moment(selectedDate, "YYYY-MM") : null
                      }
                      format="MM/YYYY"
                      disabled={!hasFiles}
                    />
                    </ConfigProvider>
                  </Form.Item>
                </div>

                {allFiles.length === 0 ? (
                  <h4>No tiene archivos cargados actualmente.</h4>
                ) : (
                  sortedFiles?.map((file) => (
                    <div key={file.id}>
                      {getExtensionIcon(file.name)}
                      <a
                        href="#"
                        style={{
                          cursor: "pointer",
                          textDecoration: "none",
                          color: "#51666C",
                          fontFamily: "Poppins",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDownload(file.id, file.name);
                        }}
                      >
                        {file.name}
                      </a>
                      <span
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                        onClick={() => handleDownload(file.id, file.name)}
                      >
                        <DownloadIcon />
                      </span>
                    </div>
                  ))
                )}
                {(selectedKind || selectedDate) &&
                  filteredFiles.length === 0 &&
                  (selectedKind && selectedDate ? (
                    <span>No hay archivos para este tipo y mes.</span>
                  ) : (
                    <>
                      {selectedKind && (
                        <span>No hay archivos para este tipo.</span>
                      )}
                      {selectedDate && (
                        <span>No hay archivos para este mes.</span>
                      )}
                    </>
                  ))}
                {filteredFiles.length > 0 && (
                  <AntdCustomPagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredFiles.length / filesPerPage)}
                    onNextPage={handleNextPage}
                    onPrevPage={handlePrevPage}
                  />
                )}
              </Form>
            )}
          </div>
        </Content>
        <Modal
          style={{ fontFamily: "Poppins" }}
          title="Cambiar contraseña"
          visible={showChangePasswordModal}
          onCancel={() => setShowChangePasswordModal(false)}
          footer={[
            <Button
              style={{ fontFamily: "Poppins" }}
              key="cancel"
              onClick={() => setShowChangePasswordModal(false)}
            >
              Cancelar
            </Button>,
            <Button
              style={{ fontFamily: "Poppins" }}
              key="reset"
              type="primary"
              onClick={() => handleChangePassword()}
            >
              Enviar correo
            </Button>,
          ]}
        >
          <p>
            Se enviará un correo al siguiente correo electrónico:{" "}
            {user.emailJefe}
          </p>
          <Form
            type="email"
            placeholder="Correo electrónico"
            value={resetPasswordEmail}
            autoComplete="on"
            onChange={(e) => setResetPasswordEmail(e.target.value)}
          ></Form>
        </Modal>
      </Layout>
    </Layout>
  );
};
