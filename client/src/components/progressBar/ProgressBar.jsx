import { Button, Progress } from "antd";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAppSelector } from "../../redux/hooks.js";
import { getUser } from "../../redux/userSlice.js";
import apiClient from "../../utils/client.js";
import {
  NotificationFailure,
  NotificationSuccess,
} from "../notifications/Notifications.jsx";
import "./ProgressBar.css";

const TOTAL_SPACE_GB = 10;
const TOTAL_SPACE_MB = TOTAL_SPACE_GB * 1024;

const ProgressBar = () => {
  const [usedSpace, setUsedSpace] = useState(0);

  const user = useAppSelector(getUser);

  useEffect(() => {
    const fetchSizeFiles = async () => {
      try {
        const response = await apiClient.get("/file");
        const files = response.data;
        const totalSize = files.reduce((acc, file) => acc + file.size, 0);
        setUsedSpace(totalSize);
      } catch (error) {
        console.error("Error al obtener los archivos:", error);
      }
    };

    fetchSizeFiles();
  }, []);

  const totalSpaceMB = TOTAL_SPACE_MB;
  const usedSpaceMB = usedSpace / (1024 * 1024);
  const usedSpacePercentage = ((usedSpaceMB / totalSpaceMB) * 100).toFixed(3);

  const isSuperAdminUser = () => {
    return user?.isSuperAdmin === true;
  };

  const confirmDeleteAllFiles = async () => {
    const result = await Swal.fire({
      title: "¿Está seguro que desea eliminar todos los archivos?",
      text: "¡Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        const response = await apiClient.delete("/file");
        if (response && response.data) {
          NotificationSuccess(response.data.message);
        } else {
          NotificationFailure(
            "Error al eliminar archivos: Respuesta del servidor inesperada"
          );
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
    }
  };

  return (
    <>
      <div className="progress-bar">
        <h4 style={{ marginBottom: "40px", fontFamily: "Poppins, sans-serif" }}>
          Espacio ocupado por archivos
        </h4>
        <Progress
          size="medium"
          type="dashboard"
          percent={usedSpacePercentage}
        />
        <p
          style={{ marginTop: "40px", fontFamily: "Poppins, sans-serif" }}
        >{`Espacio usado: ${usedSpaceMB.toFixed(
          2
        )} MB de ${totalSpaceMB} MB (10 GB)`}</p>
        <div className="button-container">
          {isSuperAdminUser() && (
            <Button
              size="medium"
              className="button-delete"
              onClick={confirmDeleteAllFiles}
              type="primary"
              danger
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Eliminar todos los archivos
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
