// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import React, {useState} from 'react';
import {useFirebaseApp} from 'reactfire';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
// const analytics = getAnalytics(app);

    const auth = getAuth();
    // console.log(getAuth)
    const firebase = useFirebaseApp();
    const submit = async () => {
        await createUserWithEmailAndPassword(auth, email,password);
        
    }

// const auth = getAuth();
// const submit = async () =>{

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       });
// }
  return (
    <div>
        <div>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Contraseña</label>
            <input type='password' id='password' onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={submit} >Iniciar sesión</button>
        </div>
    </div>
  )
}
