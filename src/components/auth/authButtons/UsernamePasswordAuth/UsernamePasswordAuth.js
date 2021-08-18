import React from "react";
import firebase from '../../../../firebase.js';
import "firebase/auth";
import './usernamePasswordAuth.css';
import { IfFirebaseUnAuthed } from "@react-firebase/auth";


export default class GoogleAuthButton extends React.Component{
    
  render(){
    return(
      <IfFirebaseUnAuthed>
        {() => (
          <button
            onClick={() => {
              const auth = new firebase.auth().getAuth();
              firebase.auth().signInWithEmailAndPassword(auth,email,password);
            }}
            className = "signInButton"
          >
            Sign In with Username And Password
          </button>
        )}
      </IfFirebaseUnAuthed>
    );
  };
}