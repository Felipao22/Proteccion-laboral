import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const CookiePolicies = () => {
  const navigate = useNavigate();

  const handleVolverClick = () => {
    navigate("/dashboard");
  };
  return (
    <div style={{ margin: "20px" }}>
      <h1>Política de Cookies temporales</h1>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en su
        dispositivo cuando visita nuestro sitio web. Utilizamos cookies para
        mejorar su experiencia de usuario al personalizar el contenido y los
        anuncios, proporcionar funciones de redes sociales y analizar nuestro
        tráfico. También compartimos información sobre su uso de nuestro sitio
        con nuestros socios de redes sociales, publicidad y análisis que pueden
        combinarla con otra información que les haya proporcionado o que hayan
        recopilado a partir del uso de sus servicios.
      </p>
      <h2>¿Cómo utilizamos las cookies?</h2>
      <p>
        Utilizamos cookies para diversos fines, incluyendo:
        <ul>
          <li>Personalizar y mejorar su experiencia en nuestro sitio web.</li>
          <li>Analizar cómo utiliza nuestro sitio web.</li>
          <li>Ofrecer publicidad personalizada.</li>
          <li>Proporcionar funciones de redes sociales.</li>
        </ul>
      </p>
      <h2>¿Cómo puede controlar las cookies?</h2>
      <p>
        Puede controlar y administrar las cookies de diversas maneras. Tenga en
        cuenta que eliminar o deshabilitar las cookies puede afectar su
        experiencia en nuestro sitio web y es posible que no pueda acceder a
        ciertas áreas o características del sitio.
      </p>
      <p>
        La mayoría de los navegadores web aceptan cookies de forma predeterminada,
        pero generalmente puede modificar la configuración de su navegador para
        rechazar cookies o notificarle cuando se están utilizando. Cada navegador
        es diferente, por lo que consulte el menú de ayuda de su navegador para
        conocer la forma correcta de modificar sus cookies.
      </p>
      <p>
        Si desea obtener más información sobre las cookies y cómo administrarlas,
        visite el sitio web <a href="http://www.allaboutcookies.org">All About Cookies</a>
        (en inglés).
      </p>
     <Button type="primary" onClick={handleVolverClick}>
      Volver
    </Button>
    </div>
  );
};

export default CookiePolicies;
