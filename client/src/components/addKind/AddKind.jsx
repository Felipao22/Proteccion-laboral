import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Tooltip } from "antd";
import { useState } from "react";
import apiClient from "../../utils/client.js";
import { useFetchCategories } from "../hooks/useFetchCategories.jsx";
import {
  NotificationFailure,
  NotificationSuccess,
} from "../notifications/Notifications.jsx";
import "./AddKind.css";

export const AddKind = () => {
  const initialValues = {
    name: "",
    categoryId: [],
  };

  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [form] = Form.useForm();


  const category = useFetchCategories();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    validateField(name, value);
  };

  const resetForm = () => {
    form.setFieldsValue(initialValues);
    // setValues(initialValues);
    setErrors({});
    setIsSubmitDisabled(true);
  };
  

  const validateUpperCase = (name) => {
    const regex = /^[A-Z]/;
    return regex.test(name);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    let isCategoryValid = true;

    switch (name) {
      case "name":
        if (!value) {
          newErrors.name = "Nombre requerido";
        } else if (!validateUpperCase(value)) {
          newErrors.name = "Primera letra debe ser mayúscula";
        } else {
          delete newErrors.name;
        }
        break;
      case "categoryId":
        if (!value || value.length === 0) {
          newErrors.categoryId = "Categoría requerida";
          isCategoryValid = false;
        } else {
          delete newErrors.categoryId;
        }
        break;
      default:
        break;
    }

    setIsSubmitDisabled(!isCategoryValid || Object.keys(newErrors).length > 0);
    setErrors(newErrors);
  };

  const handleLoadKind = async () => {
    setLoading(true);
    // Reinicia los errores
    setErrors({});
  
    // Valida los campos
    validateField("name", values.name);
  
    // Verifica si se ha seleccionado categoryId
    if (!values.categoryId || values.categoryId.length === 0) {
      setLoading(false);
      NotificationFailure("Categoría requerida");
      return;
    }
  
    // Si hay errores, los muestra y no realiza la acción de carga
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return;
    }
  
    try {
      const res = await apiClient.post("/kind", values);
      NotificationSuccess(res.data.message);
      resetForm();
    } catch (error) {
      NotificationFailure(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const CategorySelect = () => {
    return (
      <Select
        onChange={(value) =>
          handleInputChange({
            target: { name: "categoryId", value },
          })
        }
        value={values.categoryId}
        placeholder="Categorías"
      >
        <Select.Option disabled value="">
          Categorías
        </Select.Option>
        {category?.map((category) => (
          <Select.Option key={category.id} value={category.id}>
            {category.name}
          </Select.Option>
        ))}
      </Select>
    );
  };

  return (
    <Form
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      form={form}
      onFinish={handleLoadKind}
    >
      <div id="kind">
        <Form.Item label="Categoría del archivo:" name="categoryId">
          {CategorySelect()}
        </Form.Item>
        {errors.categoryId && (
          <small
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
              marginTop: "-20px",
            }}
          >
            <Tooltip title={errors.categoryId}>
              <InfoCircleOutlined style={{ marginRight: "4px" }} />
            </Tooltip>
            {errors.categoryId}
          </small>
        )}
        <Form.Item label="Nombre del tipo de archivo:" name="name">
          <Input
            placeholder="Ej: Iluminación"
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
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          style={{ marginRight: "10px" }}
          disabled={isSubmitDisabled}
        >
          Agregar
        </Button>
        <Button onClick={resetForm}>Cancelar</Button>
      </div>
    </Form>
  );
};
