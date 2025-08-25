import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Tooltip } from "antd";
import FormData from "form-data";
import { useState } from "react";
import apiClient from "../../utils/client.js";
import {
  NotificationFailure,
  NotificationSuccess,
  NotificationWarning,
} from "../notifications/Notifications.jsx";
import "./RegisterEmployee.css";

export default function RegisterEmployee() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastName: "",
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasUppercase: false,
    hasNumber: false,
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);


  const data = new FormData();

  const [form] = Form.useForm();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    validateField(name, value);
  };

  const validateEmail = (email) => {
    // Utiliza una expresión regular para verificar si el email es válido
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  const validateUpperCase = (name) => {
    const regex = /^[A-Z]/;
    return regex.test(name);
  };

  const resetForm = () => {
    setValues(initialValues);
    setPasswordRequirements({
      minLength: false,
      hasUppercase: false,
      hasNumber: false,
    });
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "email":
        if (!value) {
          newErrors.email = "Email requerido";
        } else if (!validateEmail(value)) {
          newErrors.email = "Email inválido";
        } else {
          delete newErrors.email;
        }
        break;
      case "name":
        if (!value) {
          newErrors.name = "Nombre del empleado requerido";
        } else if (!validateUpperCase(value)) {
          newErrors.name = "Primera letra debe ser mayúscula";
        } else {
          delete newErrors.name;
        }
        break;

      case "lastName":
        if (!value) {
          newErrors.lastName = "Apellido requerido";
        } else if (!validateUpperCase(value)) {
          newErrors.lastName = "Primera letra debe ser mayúscula";
        } else {
          delete newErrors.lastName;
        }
        break;

      case "password":
        if (!value) {
          newErrors.password = "Contraseña requerida";
        } else if (!validatePassword(value)) {
          newErrors.password = "Contraseña inválida";
        } else {
          delete newErrors.password;
        }
        break;

      case "confirmPassword":
        if (!value) {
          newErrors.confirmPassword = "Confirmar contraseña";
        } else if (value !== values.password) {
          newErrors.confirmPassword = "Las contraseñas no coinciden";
        } else {
          delete newErrors.confirmPassword;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    setIsSubmitDisabled(Object.keys(newErrors).length > 0);
  };

  const handleSubmit = async () => {
    setLoading(true);
    data.append("email", values.email);
    data.append("password", values.password);
    data.append("name", values.name);
    data.append("lastName", values.lastName);

    // Reinicia los errores
    setErrors({});

    // Si hay errores, los muestra
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      const res = await apiClient.post("/user/employee", values);
      if (res.data.user) {
        NotificationSuccess(res.data.message);
      }
      resetForm();
    } catch (error) {
      console.error(error);
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

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const requirements = {
      minLength: password.length >= 6,
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
    };
    setPasswordRequirements(requirements);
    handleInputChange(e);
  };

  return (
    <div className="container-register">
      <Row justify="center" align="middle">
        <Col span={24} lg={48}>
          <Card
            className="text-black m-5 box-register"
            style={{ borderRadius: "25px" }}
          >
            <Form
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className="register"
              form={form}
              onFinish={handleSubmit}
            >
              <h3 className="text-register"> Registrar Empleado</h3>

              <Form.Item label="Email" name="email">
                <Input
                  autoComplete="username"
                  placeholder="example@mail.com"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
              </Form.Item>
              {errors.email && (
                <small
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                    marginTop: "-20px",
                  }}
                >
                  <Tooltip title={errors.email}>
                    <InfoCircleOutlined style={{ marginRight: "4px" }} />
                  </Tooltip>
                  {errors.email}
                </small>
              )}

              <Form.Item label="Nombre" name="name">
                <Input
                  placeholder="Cristian"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                />
              </Form.Item>
              {errors.name && (
                <small
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                    marginTop: "-20px",
                  }}
                >
                  <Tooltip title={errors.name}>
                    <InfoCircleOutlined style={{ marginRight: "4px" }} />
                  </Tooltip>
                  {errors.name}
                </small>
              )}
              <Form.Item label="Apellido" name="lastName">
                <Input
                  placeholder="Montenegro"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleInputChange}
                />
              </Form.Item>
              {errors.lastName && (
                <small
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                    marginTop: "-20px",
                  }}
                >
                  <Tooltip title={errors.lastName}>
                    <InfoCircleOutlined style={{ marginRight: "4px" }} />
                  </Tooltip>
                  {errors.lastName}
                </small>
              )}
              <Form.Item label="Contraseña" name="password">
                <Input.Password
                  autoComplete="new-password"
                  placeholder="••••••••"
                  name="password"
                  value={values.password}
                  onChange={handlePasswordChange}
                />
                <ul className="password-requirements">
                  <li
                    className={passwordRequirements.minLength ? "success" : ""}
                  >
                    Mínimo de 6 caracteres.
                  </li>
                  <li
                    className={
                      passwordRequirements.hasUppercase ? "success" : ""
                    }
                  >
                    Al menos 1 mayúscula.
                  </li>
                  <li
                    className={passwordRequirements.hasNumber ? "success" : ""}
                  >
                    Al menos 1 número.
                  </li>
                </ul>
              </Form.Item>
              {errors.password && (
                <small
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                    marginTop: "-20px",
                  }}
                >
                  <Tooltip title={errors.password}>
                    <InfoCircleOutlined style={{ marginRight: "4px" }} />
                  </Tooltip>
                  {errors.password}
                </small>
              )}

              <Form.Item label="Confirmar Contraseña" name="confirmPassword">
                <Input.Password
                  autoComplete="new-password"
                  placeholder="••••••••"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleInputChange}
                />
              </Form.Item>
              {errors.confirmPassword && (
                <small
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                    marginTop: "-20px",
                  }}
                >
                  <Tooltip title={errors.confirmPassword}>
                    <InfoCircleOutlined style={{ marginRight: "4px" }} />
                  </Tooltip>
                  {errors.confirmPassword}
                </small>
              )}
              <Form.Item>
                <Button
                  style={{ width: "100%" }}
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                  disabled={isSubmitDisabled}
                >
                  Registrar
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
