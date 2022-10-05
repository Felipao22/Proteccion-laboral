import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store/index'
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './firebase-config'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <FirebaseAppProvider  firebaseConfig = {firebaseConfig}>
    <Suspense fallback={'conectando la app'}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>
  </Provider>
);

