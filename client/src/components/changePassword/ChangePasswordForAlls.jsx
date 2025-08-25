import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Tooltip } from "antd";
import FormData from "form-data";
import { useState } from "react";
import apiClient from "../../utils/client.js";
import {
  NotificationFailure,
  NotificationSuccess,
} from "../notifications/Notifications.jsx";
import "./ChangePassword.css";

export default function ChangePasswordForAlls({ email }) {
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasUppercase: false,
    hasNumber: false,
  });

  const data = new FormData();

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    validateField(name, value);
  };

  const validatePassword = (newPassword) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(newPassword);
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
      case "newPassword":
        if (!value) {
          newErrors.newPassword = "Contraseña requerida";
        } else if (!validatePassword(value)) {
          newErrors.newPassword = "Contraseña inválida";
        } else {
          delete newErrors.newPassword;
        }
        break;

      case "confirmPassword":
        if (!value) {
          newErrors.confirmPassword = "Confirmar contraseña";
        } else if (value !== values.newPassword) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    data.append("newPassword", values.newPassword);
    setLoading(true);

    // Reset errors
    setErrors({});

    // Validate fields

    // If there are errors, display them
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      const response = await apiClient.put(
        `/user/changePsw/users/${email}`,
        values
      );

      if (response.data) {
        NotificationSuccess(response.data);
      } else {
        NotificationFailure(response.data);
      }

      resetForm();
    } catch (error) {
      console.log(error);
      NotificationFailure(error.response.data.error);
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
    <form className="form-changePsw" onSubmit={handleSubmit}>
      <h4 style={{ fontFamily: "Poppins" }}>Cambiar contraseña</h4>
      <Row gutter={[16, 16]} className="mb-3">
        <Col span={24}>
          <Input.Password
            autoComplete="new-password"
            placeholder="Nueva contraseña"
            name="newPassword"
            value={values.newPassword}
            onChange={handlePasswordChange}
          />
          {errors.newPassword && (
            <small
              style={{
                color: "red",
                marginBottom: "10px",
                marginTop: "-20px",
              }}
            >
              <Tooltip title={errors.newPassword}>
                <InfoCircleOutlined style={{ marginRight: "4px" }} />
              </Tooltip>
              {errors.newPassword}
            </small>
          )}
          <ul style={{ fontFamily: "Poppins" }}>
            <li className={passwordRequirements.minLength ? "success" : ""}>
              Mínimo de 6 caracteres.
            </li>
            <li className={passwordRequirements.hasUppercase ? "success" : ""}>
              Al menos 1 mayúscula.
            </li>
            <li className={passwordRequirements.hasNumber ? "success" : ""}>
              Al menos 1 número.
            </li>
          </ul>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mb-3">
        <Col span={24}>
          <Input.Password
            autoComplete="new-password"
            placeholder="Confirmar nueva contraseña"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <small
              style={{
                color: "red",
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
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Button
            className="button-psw"
            disabled={isSubmitDisabled}
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{ fontFamily: "Poppins" }}
          >
            Cambiar Contraseña
          </Button>
        </Col>
      </Row>
    </form>
  );
}
