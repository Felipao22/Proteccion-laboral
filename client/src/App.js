import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Helmet } from 'react-helmet'
import Loading from "./components/loading/Loading.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import ScrollToTop from "./components/scrolltotop/ScrollToTop.jsx";
import NotFound from "./components/notfound/NotFound.jsx";

const Home = lazy(() => import("./components/home/Home.jsx"));
const Nosotros = lazy(() => import("./components/nosotros/Nosotros.jsx"));
const Contact = lazy(() => import("./components/contact/Contact.jsx"));
const Soluciones = lazy(() => import("./components/soluciones/Soluciones.jsx"));

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Helmet>
              <link rel="canonical" href="https://www.proteccionlaboral.com.ar/" />
            </Helmet>
            <Home />
          </Route>
          <Route exact path="/nosotros">
            <Helmet>
              <link rel="canonical" href="https://www.proteccionlaboral.com.ar/nosotros" />
            </Helmet>
            <Nosotros />
          </Route>
          <Route exact path="/services">
            <Helmet>
              <link rel="canonical" href="https://www.proteccionlaboral.com.ar/services" />
            </Helmet>
            <Soluciones />
          </Route>
          <Route exact path="/contact">
            <Helmet>
              <link rel="canonical" href="https://www.proteccionlaboral.com.ar/contact" />
            </Helmet>
            <Contact />
          </Route>      
          <Route path="*">
            <Helmet>
              <link rel="canonical" href="https://www.proteccionlaboral.com.ar/" />
            </Helmet>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
