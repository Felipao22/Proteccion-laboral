import { Col, DatePicker, Form, Row, Select } from "antd";
import moment from "moment";
import Swal from "sweetalert2";
import { setSelectedDate, setSelectedKind } from "../../redux/filesSlice.js";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.js";
import apiClient from "../../utils/client.js";
import { getExtensionIcon } from "../../utils/getExtensionIcon.jsx";
import { useFetchKinds } from "../hooks/useFetchKinds.jsx";
import { DeleteIcon, DownloadIcon } from "../icons/Icons.jsx";
import { NotificationFailure } from "../notifications/Notifications.jsx";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import esES from 'antd/locale/es_ES.js';
import "dayjs/locale/es.js"
dayjs.locale('es')
import "./UserFiles.css";

export const UserFiles = ({ userFiles, onDeleteFile }) => {
  const selectedKind = useAppSelector((state) => state.files.selectedKind);
  const selectedDate = useAppSelector((state) => state.files.selectedDate);
  const kinds = useFetchKinds();

  const dispatch = useAppDispatch();

  const DeleteFile = async (id) => {
    try {
      const result = await Swal.fire({
        title: "¿Está seguro que desea eliminar el archivo?",
        text: "¡Se eliminará para siempre!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        await apiClient.delete(`file/${id}`);
        onDeleteFile(id);
        Swal.fire(`Archivo eliminado `);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log(error.response.data.message);
      } else {
        console.error("Error al eliminar el archivo");
      }
    }
  };

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

  const filteredFiles = userFiles.filter((file) => {
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

  const handleKindFilterChange = (value) => {
    dispatch(setSelectedKind(value)); // Actualiza el estado global en Redux
  };

  const handleDateFilterChange = (date) => {
    const formattedDate = date ? date.format("YYYY-MM") : null; // Almacenar la fecha como cadena "YYYY-MM" o null si no hay fecha
    dispatch(setSelectedDate(formattedDate)); // Actualiza el estado global en Redux
  };

  return (
    <>
      {userFiles && userFiles.length > 0 ? (
        <Form style={{ margin: "20px" }} layout="vertical">
          <Row gutter={8}>
            <Col xs={{ span: 24 }} md={{ span: 8 }}>
              <Form.Item
                label={
                  <span style={{ fontFamily: "Poppins" }}>Filtrar por mes</span>
                }
                htmlFor="kind"
                style={{ marginBottom: 8 }}
              >
                <Select
                  onChange={handleKindFilterChange}
                  value={selectedKind}
                  style={{ maxWidth: "60%" }}
                  placeholder="Tipo de archivos"
                >
                  <Select.Option value="">Todos</Select.Option>
                  {kinds?.map((kind) => (
                    <Select.Option key={kind.id} value={kind.id}>
                      {kind.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item
                label={
                  <span style={{ fontFamily: "Poppins" }}>Filtrar por mes</span>
                }
                htmlFor="month"
                style={{ marginBottom: 8 }}
              >
                <ConfigProvider locale={esES}>
                <DatePicker
                  picker="month"
                  onChange={handleDateFilterChange}
                  value={selectedDate ? moment(selectedDate, "YYYY-MM") : null}
                  format="MM/YYYY"
                  style={{ maxWidth: "100%" }}
                />
                </ConfigProvider>
              </Form.Item>
            </Col>
          </Row>

          <ul className="list-files">
            {filteredFiles.map((file) => (
              <li key={file.id}>
                {getExtensionIcon(file.name)} {file.name}{" "}
                <DownloadIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDownload(file.id, file.name)}
                />{" "}
                <DeleteIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => DeleteFile(file.id)}
                />
              </li>
            ))}
          </ul>
          {(selectedKind || selectedDate) && filteredFiles.length === 0 && (
            <div>
              {selectedKind && selectedDate ? (
                <span>No hay archivos para este tipo y mes.</span>
              ) : (
                <>
                  {selectedKind && <span>No hay archivos para este tipo.</span>}
                  {selectedDate && <span>No hay archivos para este mes.</span>}
                </>
              )}
            </div>
          )}
        </Form>
      ) : (
        <p style={{ margin: "50px" }}>
          No hay archivos cargados en este Establecimiento/Obra.
        </p>
      )}
    </>
  );
};
