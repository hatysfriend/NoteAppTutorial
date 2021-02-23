import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {firebase} from '@firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB03CYHPLkxPTvsuKWN38n_vdFojUwlIxE",
  authDomain: "noteapp-5e13a.firebaseapp.com",
  projectId: "noteapp-5e13a",
  storageBucket: "noteapp-5e13a.appspot.com",
  messagingSenderId: "274085177568",
  appId: "1:274085177568:web:4fb91531b22cea97cb0885"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
