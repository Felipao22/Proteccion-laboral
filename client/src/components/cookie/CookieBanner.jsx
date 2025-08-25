import { useState, useMemo } from "react";
import { Button, Modal } from "antd";
import { useAppSelector } from "../../redux/hooks.js";
import { getUser } from "../../redux/userSlice.js";
import { deleteCookie } from "../../utils/cookieUtils.js";

const CookieBanner = () => {
  const [visible, setVisible] = useState(localStorage.getItem("cookieConsent") !== "true");
  const user = useAppSelector(getUser);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
    sessionStorage.removeItem('user')
  };

  const handleDenyCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setVisible(false);
    sessionStorage.setItem("user", JSON.stringify(user));
    deleteCookie('user')
  };

  const modalComponent = useMemo(() => (
    <Modal
      visible={visible}
      title="Consentimiento de Cookies"
      onCancel={() => {
        setVisible(false);
        handleDenyCookies();
      }}
      footer={[
        <Button type="primary" key="accept" onClick={handleAcceptCookies}>
          Aceptar Cookies temporales
        </Button>,
        <Button key="deny" onClick={handleDenyCookies}>
          Denegar
        </Button>
      ]}
    >
      <p>
        Este sitio web utiliza cookies temporales para mejorar la experiencia del usuario.
        Al utilizar nuestro sitio web, aceptas todas las cookies de acuerdo con
        nuestra <a href="/politica-de-cookies">política de cookies</a>.
      </p>
    </Modal>
  ), [visible]);

  return modalComponent;
};

export default CookieBanner;
