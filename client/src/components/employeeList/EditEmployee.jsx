import { useState, useEffect } from "react";
import apiClient from "../../utils/client.js";
import Swal from "sweetalert2";
import { Button, Col, Input, Row } from "antd";
import { Card } from "antd";
import Loading from "../loading/Loading.jsx";
import { NotificationFailure } from "../notifications/Notifications.jsx";
import ChangePasswordForAlls from "../changePassword/ChangePasswordForAlls.jsx";
import "./EditEmployee.css";

export default function EditEmployee({
  email,
  onCancel,
  fetchAndSetEmployeesData,
  originalEmployeeData,
}) {
  const [employeeData, setEmployeeData] = useState(
    originalEmployeeData || {
      name: "",
      lastName: "",
      newPassword: "",
      confirmPassword: "",
    }
  );

  const [loading, setLoading] = useState(true);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await apiClient.get(`/user/${email}`);
        setEmployeeData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployeeData();
  }, [email]);

  const handleUpdateEmployee = async () => {
    const response = await apiClient.get(`/user/${email}`);
    const employeeToEdit = response.data;
    try {
      const result = await Swal.fire({
        title: `¿Está seguro que desea editar al empleado/a: ${employeeToEdit.name} ${employeeToEdit.lastName}?`,
        text: "¡Sus datos serán editados!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, editar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        await apiClient.put(`/user/${email}`, employeeData);
        fetchAndSetEmployeesData();
        Swal.fire(
          `Empleado/a: ${employeeToEdit.name} ${employeeToEdit.lastName} editado/a`
        );
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        NotificationFailure(error.response.data.message);
      } else {
        NotificationFailure("Error al editar al empleado/a");
      }
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Row justify="center" align="middle">
          <Col span={24} lg={12}>
            <Card
              className="text-black m-5 box-register"
              style={{ borderRadius: "25px" }}
            >
              <div className="register">
                <h2 className="text-register">Editar Empleado/a</h2>
                <label style={{ fontFamily: "Poppins" }}>Nombre:</label>
                <Input
                  type="text"
                  value={employeeData.name || ""}
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      name: e.target.value,
                    })
                  }
                />
                <label style={{ fontFamily: "Poppins" }}>Apellido:</label>
                <Input
                  type="text"
                  value={employeeData.lastName || ""}
                  onChange={(e) =>
                    setEmployeeData({
                      ...employeeData,
                      lastName: e.target.value,
                    })
                  }
                />
                {isChangingPassword && <ChangePasswordForAlls email={email} />}
              </div>
              <div style={{ marginTop: "20px" }}>
                <Button
                  style={{
                    marginRight: "5px",
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                  }}
                  type="primary"
                  onClick={handleUpdateEmployee}
                >
                  Guardar
                </Button>
                {!isChangingPassword && (
                  <Button
                    style={{ fontFamily: "Poppins" }}
                    className="button-cambiar"
                    type="primary"
                    onClick={() => setIsChangingPassword(true)}
                  >
                    Cambiar Contraseña
                  </Button>
                )}
                <Button
                  style={{ fontFamily: "Poppins" }}
                  type="primary"
                  danger
                  onClick={() => {
                    setEmployeeData(originalEmployeeData);
                    onCancel();
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}
