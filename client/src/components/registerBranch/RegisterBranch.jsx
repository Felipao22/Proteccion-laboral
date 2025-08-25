import {
  CloseCircleOutlined,
  InfoCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Select, Tooltip } from "antd";
import FormData from "form-data";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks.js";
import { setSelectedBranch } from "../../redux/userSlice.js";
import apiClient from "../../utils/client.js";
import { useFetchCities } from "../hooks/useFetchCities.jsx";
import { useFetchUsers } from "../hooks/useFetchUsers.jsx";
import {
  NotificationFailure,
  NotificationSuccess,
  NotificationWarning,
} from "../notifications/Notifications.jsx";
import "./RegisterBranch.css";

export default function Register() {
  const initialValues = {
    nombreEmpresa: "",
    email: "",
    password: "",
    confirmPassword: "",
    cuit: "",
    nombreSede: "",
    ciudad: "",
    direccion: "",
    telefono: "",
    emails: "",
    accessUser: null,
    emailJefe: "",
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasUppercase: false,
    hasNumber: false,
  });
  const [loading, setLoading] = useState(false);
  const [emailFields, setEmailFields] = useState([""]);
  const [emailEmployee, setEmailEmployee] = useState([]);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [form] = Form.useForm();

  const selectedCities = useFetchCities();
  const selectedUser = useFetchUsers();

  const data = new FormData();


  const dispatch = useAppDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    validateField(name, value);
  };

  const validateEmail = (userEmail) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(userEmail);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  const validateUpperCase = (name) => {
    const regex = /^[A-Z]/;
    return regex.test(name);
  };

  const VALIDATE_CUIT = /^[0-9]{11}$/;

  const validatePhoneNumber = (name) => {
    const regex = /^[0-9]{10}$/;
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
      case "nombreEmpresa":
        if (!value) {
          newErrors.nombreEmpresa = "Nombre de Empresa requerido";
        } else if (!validateUpperCase(value)) {
          newErrors.nombreEmpresa = "Primera letra debe ser mayúscula";
        } else {
          delete newErrors.nombreEmpresa;
        }
        break;

      case "email":
        if (!value) {
          newErrors.email = "Email requerido";
        } else if (!validateEmail(value)) {
          newErrors.email = "Email inválido";
        } else {
          delete newErrors.email;
        }
        break;

      case "cuit":
        if (!value) {
          newErrors.cuit = "Cuit requerido";
        } else if (!VALIDATE_CUIT.test(value)) {
          newErrors.cuit = "Deben ser 11 números";
        } else {
          delete newErrors.cuit;
        }
        break;

      case "nombreSede":
        if (!value) {
          newErrors.nombreSede = "Nombre de Establecimiento/Obra requerido";
        } else if (!validateUpperCase(value)) {
          newErrors.nombreSede = "Primera letra debe ser mayúscula";
        } else {
          delete newErrors.nombreSede;
        }
        break;

      case "ciudad":
        if (!value) {
          newErrors.ciudad = "Ciudad requerida";
        } else {
          delete newErrors.ciudad;
        }
        break;

      case "direccion":
        if (!value) {
          newErrors.direccion = "Direccion requerida";
        } else if (!validateUpperCase(value)) {
          newErrors.direccion = "Primera letra debe ser mayúscula";
        } else {
          delete newErrors.direccion;
        }
        break;

      case "telefono":
        if (!value) {
          newErrors.telefono = "Teléfono requerido";
        } else if (!validatePhoneNumber(value)) {
          newErrors.telefono = "Deben ser 10 números";
        } else {
          delete newErrors.telefono;
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

      case "emailJefe":
        if (!value) {
          newErrors.emailJefe = "Email requerido";
        } else if (!validateEmail(value)) {
          newErrors.emailJefe = "Email inválido";
        } else {
          delete newErrors.emailJefe;
        }
        break;

      case "emails":
        if (emailFields.some((email) => !email.trim())) {
          newErrors.emails = "Mails requeridos";
        } else {
          delete newErrors.emails;
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
    data.append("nombreEmpresa", values.nombreEmpresa);
    data.append("email", values.email);
    data.append("password", values.password);
    data.append("cuit", values.cuit);
    data.append("nombreSede", values.nombreSede);
    data.append("ciudad", values.ciudad);
    data.append("direccion", values.direccion);
    data.append("telefono", values.telefono);
    data.append("emails", values.emails);
    data.append("accessUser", values.accessUser);
    data.append("emailJefe", values.emailJefe);

    // Reinicia los errores
    setErrors({});

    values.accessUser = emailEmployee;

    // Si hay errores, los muestra y no realiza la acción de carga
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return;
    }

    // Filtrar campos de correo electrónico vacíos
    const nonEmptyEmails = emailFields.filter((email) => email.trim() !== "");

    try {
      const res = await apiClient.post("/user", {
        ...values,
        emails: nonEmptyEmails,
      });
      if (res.data.newUser) {
        NotificationSuccess(res.data.message);
        dispatch(setSelectedBranch(res.data.newUser));
      }
      if (res.data.message.includes("correo enviado")) {
        // Muestra un mensaje adicional si el correo se ha enviado
        NotificationSuccess("El correo se ha enviado correctamente.");
      }
      resetForm();
      form.resetFields();
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        NotificationFailure(
          "No estás autorizado para realizar esta acción, token inválido. Por favor, inicia sesión nuevamente."
        );
      } else {
        NotificationWarning(error.response.data.warning);
        NotificationFailure(error.response);
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

  const handleAddEmailField = (e) => {
    e.preventDefault();
    setEmailFields([...emailFields, ""]);
  };

  const handleEmailChange = (index, value) => {
    const updatedFields = [...emailFields];
    updatedFields[index] = value;
    setEmailFields(updatedFields);
  };

  const CitySelect = () => {
    return (
      <Select
        onChange={(value) =>
          handleInputChange({
            target: { name: "ciudad", value },
          })
        }
        value={values.ciudad}
        placeholder="Ciudades"
      >
        <Select.Option disabled value="">
          Ciudades
        </Select.Option>
        {selectedCities?.map((city) => (
          <Select.Option key={city.id} value={city.nombre}>
            {city.nombre}
          </Select.Option>
        ))}
      </Select>
    );
  };

  const handleRemoveEmailField = (index) => {
    const updatedFields = [...emailFields];
    updatedFields.splice(index, 1);
    setEmailFields(updatedFields);
  };

  const AdminEmailSelect = () => {
    return (
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Seleccionar email de empleado"
        value={emailEmployee}
        onChange={(selectedEmails) => setEmailEmployee(selectedEmails)}
      >
        {selectedUser
          ?.filter((user) => user.isAdmin && !user.isSuperAdmin)
          .map((user) => (
            <Select.Option key={user.userId} value={user.email}>
              {user?.name} {user?.lastName}
            </Select.Option>
          ))}
      </Select>
    );
  };

  return (
    <div className="container-register">
      <Row justify="center" align="middle">
        <Col span={24} lg={48}>
          <Card className="text-black m-5" style={{ borderRadius: "25px" }}>
            <Form
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className="register"
              form={form}
              onFinish={handleSubmit}
            >
              <h3 className="text-register"> Registrar Establecimiento/Obra</h3>
              <div className="form-item">
                <Form.Item label="Empresa" name="nombreEmpresa">
                  <Input
                    placeholder="Empresa X"
                    name="nombreEmpresa"
                    value={values.nombreEmpresa}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                {errors.nombreEmpresa && (
                  <small
                    style={{
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "-20px",
                    }}
                  >
                    <Tooltip title={errors.nombreEmpresa}>
                      <InfoCircleOutlined style={{ marginRight: "4px" }} />
                    </Tooltip>
                    {errors.nombreEmpresa}
                  </small>
                )}

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
                <Form.Item label="CUIT" name="cuit">
                  <Input
                    type="number"
                    placeholder="20374373075"
                    name="cuit"
                    value={values.cuit}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                {errors.cuit && (
                  <small
                    style={{
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "-20px",
                    }}
                  >
                    <Tooltip title={errors.cuit}>
                      <InfoCircleOutlined style={{ marginRight: "4px" }} />
                    </Tooltip>
                    {errors.cuit}
                  </small>
                )}
                <Form.Item label="Establecimiento/Obra" name="nombreSede">
                  <Input
                    placeholder="Establecimiento X"
                    name="nombreSede"
                    value={values.nombreSede}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                {errors.nombreSede && (
                  <small
                    style={{
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "-20px",
                    }}
                  >
                    <Tooltip title={errors.nombreSede}>
                      <InfoCircleOutlined style={{ marginRight: "4px" }} />
                    </Tooltip>
                    {errors.nombreSede}
                  </small>
                )}
                <Form.Item label="Teléfono" name="telefono">
                  <Input
                    type="number"
                    placeholder="2664598798"
                    name="telefono"
                    value={values.telefono}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                {errors.telefono && (
                  <small
                    style={{
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "-20px",
                    }}
                  >
                    <Tooltip title={errors.telefono}>
                      <InfoCircleOutlined style={{ marginRight: "4px" }} />
                    </Tooltip>
                    {errors.telefono}
                  </small>
                )}
                <Form.Item label="Dirección" name="direccion">
                  <Input
                    placeholder="Bolivar 1024"
                    name="direccion"
                    value={values.direccion}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                {errors.direccion && (
                  <small
                    style={{
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "-20px",
                    }}
                  >
                    <Tooltip title={errors.direccion}>
                      <InfoCircleOutlined style={{ marginRight: "4px" }} />
                    </Tooltip>
                    {errors.direccion}
                  </small>
                )}
                <Form.Item label="Ciudad" name="ciudad">
                  {CitySelect()}
                </Form.Item>
                {errors.ciudad && (
                  <small
                    style={{
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "-20px",
                    }}
                  >
                    <Tooltip title={errors.ciudad}>
                      <InfoCircleOutlined style={{ marginRight: "4px" }} />
                    </Tooltip>
                    {errors.ciudad}
                  </small>
                )}

                <Form.Item label="Contraseña" name="password">
                  <Input.Password
                    placeholder="••••••••"
                    autoComplete="new-password"
                    name="password"
                    value={values.password}
                    onChange={handlePasswordChange}
                  />
                  <ul className="password-requirements">
                    <li
                      className={
                        passwordRequirements.minLength ? "success" : ""
                      }
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
                      className={
                        passwordRequirements.hasNumber ? "success" : ""
                      }
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
                    placeholder="••••••••"
                    autoComplete="new-password"
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

                <Form.Item label="Email del Jefe" name="emailJefe">
                  <Input
                    name="emailJefe"
                    value={values.emailJefe}
                    onChange={handleInputChange}
                    placeholder="example@mail.com"
                  />
                </Form.Item>
                {errors.emailJefe && (
                  <small
                    style={{
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "-20px",
                    }}
                  >
                    <Tooltip title={errors.emailJefe}>
                      <InfoCircleOutlined style={{ marginRight: "4px" }} />
                    </Tooltip>
                    {errors.emailJefe}
                  </small>
                )}

                <Form.Item label="Emails" name="emails">
                  {emailFields.map((email, index) => (
                    <div key={index}>
                      <Input
                        label="Email"
                        type="email"
                        placeholder="example@mail.com"
                        value={email}
                        onChange={(e) =>
                          handleEmailChange(index, e.target.value)
                        }
                      />
                      <Button
                        icon={<PlusOutlined />}
                        onClick={handleAddEmailField}
                      />
                      <Button
                        type="primary"
                        danger
                        icon={<CloseCircleOutlined />}
                        onClick={() => handleRemoveEmailField(index)}
                        style={{ marginTop: "5px" }}
                        size="20px"
                      ></Button>
                    </div>
                  ))}
                </Form.Item>

                <Form.Item label="Acceso" name="accessUser">
                  {AdminEmailSelect()}
                </Form.Item>
              </div>

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
