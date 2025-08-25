import { Button, Col, Input, Row } from "antd";
import FormData from "form-data";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiClient from "../../utils/client.js";
import {
  NotificationFailure,
  NotificationSuccess,
} from "../notifications/Notifications.jsx";
import "./ResetPassword.css";

function ResetPassword() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const navigate = useNavigate();

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasUppercase: false,
    hasNumber: false,
  });

  const [loading, setLoading] = useState(false);

  const data = new FormData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    data.append("oldPassword", values.oldPassword);
    data.append("newPassword", values.newPassword);

    setLoading(true);

    // Reset errors
    setErrors({});

    // Validate fields
    let newErrors = {};

    if (!values.newPassword) {
      newErrors.newPassword = "Contraseña nueva requerida";
    }

    if (!validatePassword(values.newPassword)) {
      newErrors.newPassword = "Contraseña nueva inválida";
    }

    if (!values.confirmPassword) {
      newErrors.confirmPassword = "Confirmar contraseña requerida";
    }

    if (values.newPassword !== values.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    // If there are errors, display them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const newPassword = values.newPassword;

      const response = await apiClient.put(`/user/resetPassword/${token}`, {
        newPassword,
      });

      if (response.status === 200) {
        NotificationSuccess(response.data);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        NotificationFailure(response.data);
      }
    } catch (error) {
      //   console.error("Error al restablecer la contraseña:", error);
      console.log(error.response.data);
      NotificationFailure(error.response.data);
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
    <form className="form-resetPsw" onSubmit={handleSubmit}>
      <h2>Restablecer contraseña</h2>
      <Row gutter={[16, 16]} className="mb-3">
        <Col span={24}>
          <Input.Password
            placeholder="Nueva contraseña"
            name="newPassword"
            value={values.newPassword}
            onChange={handlePasswordChange}
          />
          {errors.newPassword && (
            <div className="text-danger">{errors.newPassword}</div>
          )}
          <ul>
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
            placeholder="Confirmar nueva contraseña"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <div className="text-danger">{errors.confirmPassword}</div>
          )}
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Restablecer contraseña
          </Button>
        </Col>
      </Row>
    </form>
  );
}

export default ResetPassword;
