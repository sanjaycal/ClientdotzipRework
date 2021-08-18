import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import reportWebVitals from './reportWebVitals';
import firebase from './firebase.js';
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
} from "@react-firebase/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainApp from './components/app/mainApp';
import AuthButtons from './components/auth/authButtons/authButtons.js';  

var config = {
  apiKey: "AIzaSyCfVajxuC8eMIHxgkIW3PH3x-025rXZCAo",
  authDomain: "clientdotzip1.firebaseapp.com",
  databaseURL: "https://clientdotzip1-default-rtdb.firebaseio.com",
  projectId: "clientdotzip1",
  storageBucket: "clientdotzip1.appspot.com",
  messagingSenderId: "821636603910",
  appId: "1:821636603910:web:15bef6db31650d0fd92387",
  measurementId: "G-EH59PDZK4T"
};

const { providerId, isSignedIn, ...authProviderConfig } = config

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <FirebaseAuthProvider firebase={firebase} {...authProviderConfig}>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet"></link>

        <AuthButtons />
        <MainApp />
      </FirebaseAuthProvider>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();