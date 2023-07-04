import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Helmet } from 'react-helmet';
import Loading from "./components/loading/Loading.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import ScrollToTop from "./components/scrolltotop/ScrollToTop.jsx";
import NotFound from "./components/notfound/NotFound.jsx";

const Home = lazy(() => import("./components/home/Home.jsx"));
const Nosotros = lazy(() => import("./components/nosotros/Nosotros.jsx"));
const Contact = lazy(() => import("./components/contact/Contact.jsx"));
const Soluciones = lazy(() => import("./components/soluciones/Soluciones.jsx"));

function App() {
  useEffect(() => {
    // Mueve la carga del archivo CSS de font-awesome al componente App para que solo se cargue en las rutas necesarias.
    const link = document.createElement('link');
    link.href = "https://use.fontawesome.com/releases/v5.15.1/css/all.css";
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Router>
      <Helmet>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Soluciones} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
