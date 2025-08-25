import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, Space, Table } from "antd";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import apiClient from "../../utils/client.js";
import { NotificationFailure } from "../notifications/Notifications.jsx";
import EditEmployee from "./EditEmployee.jsx";
import "./EmployeeList.css";

const EmployeeList = ({}) => {
  const [employees, setEmployees] = useState([]);
  const [editEmployeeEmail, setEditEmployeeEmail] = useState("");
  
  useEffect(() => {
    const fetchEmployeesData = async () => {
      try {
        const res = await apiClient.get("/user");

        const filteredEmployees = res?.data?.filter(
          (user) => user?.isAdmin && !user?.isSuperAdmin
        );
        setEmployees(filteredEmployees);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployeesData();
  }, []);

  const fetchAndSetEmployeesData = async () => {
    try {
      const res = await apiClient.get("/user");
      const filteredEmployees = res?.data?.filter(
        (user) => user?.isAdmin && !user?.isSuperAdmin
      );
      setEmployees(filteredEmployees);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBlockEmployee = async (email) => {
    const response = await apiClient.get(`/user/${email}`);
    const userToBlock = response.data;
    try {
      const result = await Swal.fire({
        title: `¿Está seguro que desea bloquear al empleado/a: ${userToBlock.name} ${userToBlock.lastName}?`,
        text: "¡El usuario no tendrá acceso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, bloquear",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        await apiClient.put(`user/baneo/${email}`);
        const response = await apiClient.get("/user");
        const updatedUsers = response.data;
        const filteredEmployees = updatedUsers.filter(
          (user) => user.isAdmin && !user.isSuperAdmin
        );
        setEmployees(filteredEmployees);
        setEmployees((prevEmployees) =>
          prevEmployees.map((employee) =>
            employee.email === email ? { ...employee, active: false } : employee
          )
        );
        Swal.fire(
          `Empleado/a: ${userToBlock.name} ${userToBlock.lastName} bloqueado/a! `
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
        NotificationFailure("Error al bloquear el empleado");
      }
    }
  };

  const handleActivateEmployee = async (email) => {
    const response = await apiClient.get(`/user/${email}`);
    const userToActive = response.data;
    try {
      const result = await Swal.fire({
        title: `¿Está seguro que desea activar al empleado/a: ${userToActive.name} ${userToActive.lastName}?`,
        text: "¡Volverá a estar activo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, activar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        await apiClient.put(`user/activar/${email}`);
        const response = await apiClient.get("/user");
        const updatedUsers = response.data;
        const filteredEmployees = updatedUsers.filter(
          (user) => user.isAdmin && !user.isSuperAdmin
        );
        setEmployees(filteredEmployees);
        Swal.fire(
          `Empleado/a: ${userToActive.name} ${userToActive.lastName} activado/a! `
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
        NotificationFailure("Error al activar el usuario");
      }
    }
  };

  const handleDeleteEmployee = async (email) => {
    const response = await apiClient.get(`/user/${email}`);
    const userToDelete = response.data;
    try {
      const result = await Swal.fire({
        title: `¿Está seguro que desea eliminar al empleado/a ${userToDelete.name} ${userToDelete.lastName}?`,
        text: "¡Será eliminado/a y no podrá ver sus datos!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        await apiClient.delete(`/user/${email}`);
        const response = await apiClient.get("/user");
        const updatedUsers = response.data;
        const filteredEmployees = updatedUsers.filter(
          (user) => user.isAdmin && !user.isSuperAdmin
        );
        setEmployees(filteredEmployees);
        Swal.fire(
          `Empleado/a ${userToDelete.name} ${userToDelete.lastName} eliminado/a!`
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
        NotificationFailure("Error al eliminar el Establecimiento/Obra");
      }
    }
  };

  const menu = (email) => (
    <Menu>
      <Menu.Item key="1" onClick={() => handleBlockEmployee(email)}>
        <LockOutlined /> Bloquear
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleActivateEmployee(email)}>
        <UnlockOutlined /> Activar
      </Menu.Item>
      <Menu.Item key="3" onClick={() => setEditEmployeeEmail(email)}>
        <EditOutlined /> Editar
      </Menu.Item>
      <Menu.Item key="4" danger onClick={() => handleDeleteEmployee(email)}>
        <DeleteOutlined /> Eliminar
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Acciones",
      key: "actions",
      render: (record) => (
        <Space size="middle">
          <Dropdown overlay={() => menu(record.email)} placement="bottomLeft">
            <Button>
              <EllipsisOutlined />
            </Button>
          </Dropdown>
        </Space>
      ),
      responsive: ["xs"],
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellido",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Acciones",
      key: "actions",
      render: (record) => (
        <Space size="middle">
          <Dropdown overlay={() => menu(record.email)} placement="bottomLeft">
            <Button>
              <EllipsisOutlined />
            </Button>
          </Dropdown>
        </Space>
      ),
      responsive: ["sm", "md", "lg", "xl"],
    },
  ];

  return (
    <>
      {editEmployeeEmail ? (
        <EditEmployee
          email={editEmployeeEmail}
          onCancel={() => setEditEmployeeEmail("")}
          fetchAndSetEmployeesData={fetchAndSetEmployeesData}
        />
      ) : (
        <Table
          style={{
            marginRight: "10px",
            marginLeft: "10px",
            marginTop: "50px",
          }}
          columns={columns}
          dataSource={employees}
          rowKey="email"
          pagination={false}
          scroll={{ x: true }}
          rowClassName={(record) =>
            record.active === false ? "blocked-row" : ""
          }
        />
      )}
    </>
  );
};

export default EmployeeList;
