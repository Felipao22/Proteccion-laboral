import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Auth from './components/auth/Auth.jsx';
import Home from './components/home/Home.jsx'
import Register from './components/register/Register.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/' component={Home}/>
        <Route exact path= '/register' component={Register}/>
        <Route exact path= '/auth' component={Auth}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
