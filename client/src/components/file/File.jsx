import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import FormData from "form-data";
import { MDBIcon } from "mdb-react-ui-kit";
import { useEffect, useId, useRef, useState } from "react";
import apiClient from "../../utils/client.js";
import { formatFileSize } from "../../utils/formatFilesize.js";
import {
  NotificationFailure,
  NotificationSuccess,
} from "../notifications/Notifications.jsx";
import "./File.css";
const { TextArea } = Input;

export const File = ({ userEmail }) => {
  const initialValues = {
    kindId: null,
    userEmail: null,
    emails: null,
    emailText: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedKind, setSelectedKind] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const hiddenFileInput = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [selectedBusinessEmail, setSelectedBusinessEmail] = useState(null);
  const [selectedEmailBoss, setSelectedEmailBoss] = useState(null);
  const userLoggedInEmail = userEmail;
  const [userInfo, setUserInfo] = useState({});

  const id = useId();

  const data = new FormData();

  const handleFileChange = (e) => {
    if (e.target.files != null) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileClick = () => {
    if (hiddenFileInput.current != null) {
      hiddenFileInput.current.click();
    }
  };

  const resetForm = () => {
    setFormData(initialValues);
    setSelectedFile("");
    setSelectedEmails([]);
    setSelectedBusinessEmail("");
  };

  const handleLoadFile = async () => {
    setLoading(true);
    data.append("file", selectedFile);
    data.append("userEmail", formData.userEmail);
    data.append("kindId", formData.kindId);
    data.append("emails", formData.emails);
    data.append("emailText", formData.emailText);
    try {
      const res = await apiClient.post("/file", data);
      NotificationSuccess(res.data.message);
      if (res.data.message.includes("correo enviado")) {
        NotificationSuccess("El correo se ha enviado correctamente.");
      }
      resetForm();
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        NotificationFailure(
          "No estás autorizado para realizar esta acción, token inválido. Por favor, inicia sesión nuevamente."
        );
      } else {
        NotificationWarning(error.response.data.warning);
        NotificationFailure(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchKindData = async () => {
      try {
        const res = await apiClient.get("/kind");
        setSelectedKind(res.data);
      } catch (error) {
        NotificationFailure(error.response.data.message);
      }
    };

    fetchKindData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await apiClient.get("/user");
        setSelectedUser(res.data);

        if (formData.userEmail) {
          const emailResponse = await apiClient.get(
            `/user/${formData.userEmail}/emails`
          );
          setSelectedEmails(emailResponse.data);
          const business = await apiClient.get(`/user/${formData.userEmail}`);
          const dataBusiness = business?.data;
          const emailBusiness = dataBusiness?.email;
          setSelectedBusinessEmail(emailBusiness);
          const emailBoss = dataBusiness.emailJefe;
          setSelectedEmailBoss(emailBoss);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          NotificationFailure(
            "No estás autorizado para realizar esta acción, token inválido. Por favor, inicia sesión nuevamente."
          );
        } else {
          NotificationFailure(error.response.data.message);
        }
      }
    };

    fetchUserData();
  }, [formData.userEmail]);

  const KindOfFile = () => {
    return (
      <>
        {selectedKind?.map((e) => (
          <Select.Option key={e.id} value={e.id}>
            {e.name}
          </Select.Option>
        ))}
      </>
    );
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await apiClient.get(`/user/${userLoggedInEmail}`);
        const userData = response.data;
        setUserInfo(userData);
      } catch (error) {
        NotificationFailure(error.response.data);
      }
    };
    fetchUserInfo();
  }, [userLoggedInEmail]);

  const BranchNameOfUser = () => {
    // Verifica si el usuario es isSuperAdmin
    const isSuperAdmin = userInfo?.isSuperAdmin;
    // Si es isSuperAdmin, proporciona acceso a todos los establecimientos
    if (isSuperAdmin) {
      const allBranches = selectedUser
        ?.filter((user) => !user.isAdmin)
        .map((e) => (
          <Select.Option key={e.email} value={e.email}>
            {e.nombreSede}
          </Select.Option>
        ));

      return <>{allBranches}</>;
    }

    const filteredBranches = selectedUser
      ?.filter(
        (user) =>
          !user.isAdmin && user.accessUser?.flat().includes(userLoggedInEmail)
      )
      .map((e) => (
        <Select.Option key={e.email} value={e.email}>
          {e.nombreSede}
        </Select.Option>
      ));

    // Agrega una opción para el caso en que el usuario no tenga acceso
    const noAccessOption = (
      <Select.Option key="no-access" value="no-access" disabled>
        No tiene acceso a ningún establecimiento aún.
      </Select.Option>
    );

    return (
      <>
        {filteredBranches?.length > 0 ? [...filteredBranches] : noAccessOption}
      </>
    );
  };

  const handleClearFile = () => {
    resetForm();
  };

  const EmailsOfBranch = () => {
    return (
      <>
        {selectedEmails?.map((email) => (
          <Select.Option key={email} value={email}>
            {email}
          </Select.Option>
        ))}
        {selectedBusinessEmail && (
          <Select.Option
            key={selectedBusinessEmail}
            value={selectedBusinessEmail}
          >
            {selectedBusinessEmail}
          </Select.Option>
        )}
        {selectedEmailBoss && (
          <Select.Option key={selectedEmailBoss} value={selectedEmailBoss}>
            {selectedEmailBoss}
          </Select.Option>
        )}
      </>
    );
  };

  return (
    <div id="file">
      <label htmlFor={id}>Seleccione el tipo de archivo:</label>
      <Form.Item htmlFor={id}>
        <Select
          onChange={(value) =>
            handleInputChange({
              target: { name: "kindId", value },
            })
          }
          value={formData.kindId}
          style={{ maxWidth: "400px" }}
          placeholder="Tipo de archivos"
        >
          {KindOfFile()}
        </Select>
      </Form.Item>
      <label htmlFor={id}>Seleccione el establecimiento/obra:</label>
      <Form.Item htmlFor={id}>
        <Select
          onChange={(value) =>
            handleInputChange({
              target: { name: "userEmail", value },
            })
          }
          value={formData.userEmail}
          style={{ maxWidth: "400px" }}
          placeholder="Establecimientos"
        >
          {BranchNameOfUser()}
        </Select>
      </Form.Item>
      <label htmlFor={id}>Seleccione los emails a quien se notificará:</label>
      <Form.Item htmlFor={id}>
        <Select
          mode="multiple"
          onChange={(values) => {
            handleInputChange({
              target: { name: "emails", value: values },
            });
          }}
          value={formData.emails}
          style={{ maxWidth: "400px" }}
          placeholder="Seleccionar correos electrónicos"
        >
          {EmailsOfBranch()}
        </Select>
      </Form.Item>
      <label htmlFor={id}>Notas/Aclaraciones complementarias:</label>
      <Form.Item htmlFor={id}>
        <TextArea
          rows={4}
          onChange={(event) => {
            handleInputChange({
              target: { name: "emailText", value: event.target.value },
            });
          }}
          value={formData.emailText}
          style={{ maxWidth: "400px" }}
          name="emailText"
          placeholder="Información del mail"
        ></TextArea>
      </Form.Item>
      <div className="content d-flex flex-column mb-4" data-aos="fade">
        <span>Archivo:</span>
        <label className="file">
          <Button
            style={{ fontFamily: "Poppins" }}
            icon={<UploadOutlined />}
            onClick={handleFileClick}
          >
            Seleccionar Archivo
          </Button>
          <input
            type="file"
            accept=".pdf,.xls,.xlsx,.doc,.jpg,.jpeg,.docx"
            ref={hiddenFileInput}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>
        <span>
          {selectedFile && selectedFile.name}{" "}
          {selectedFile && formatFileSize(selectedFile.size)}
        </span>
        {loading && (
          <div className="text-center my-4">
            <MDBIcon icon="spinner" spin size="3x" />
            <div>Cargando archivo...</div>
          </div>
        )}
      </div>

      <div
        className="content d-flex  mb-3 d-flex align-items-start"
        data-aos="fade"
      >
        <Button
          type="primary"
          style={{ marginRight: "10px", fontFamily: "Poppins" }}
          onClick={handleLoadFile}
        >
          Subir
        </Button>
        <Button style={{ fontFamily: "Poppins" }} onClick={handleClearFile}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};
