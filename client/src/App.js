import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from './components/loading/Loading.jsx';
import NavBar from './components/navbar/NavBar.jsx';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(() => import('./components/home/Home.jsx'));
const Register = lazy(() => import('./components/register/Register.jsx'));
const Login = lazy(() => import('./components/login/Login.jsx'));
const Nosotros = lazy(() => import('./components/nosotros/Nosotros.jsx'));
const Contact = lazy(() => import('./components/contact/Contact.jsx'));
const User = lazy(() => import('./components/user/User.jsx'));
const Soluciones = lazy(() => import('./components/soluciones/Soluciones.jsx'));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path= '/' component={Home}/>
        <Route exact path= '/register' component={Register}/>
        <Route exact path= '/login' component={Login}/>
        <Route exact path= '/nosotros' component={Nosotros}/>
        <Route exact path= '/contact' component={Contact}/>
        <Route exact path= '/user' component={User}/>
        <Route exact path= '/services' component={Soluciones}/>
      </Switch>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
