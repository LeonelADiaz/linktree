import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCu8tSuAUEPPNEQhwYjprvAxUPJKtBOwUQ",
  authDomain: "linktree-fc018.firebaseapp.com",
  projectId: "linktree-fc018",
  storageBucket: "linktree-fc018.appspot.com",
  messagingSenderId: "198940188781",
  appId: "1:198940188781:web:30c8d0f3a8888cd5b69f64",
  measurementId: "G-D10SYWS3XE"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

