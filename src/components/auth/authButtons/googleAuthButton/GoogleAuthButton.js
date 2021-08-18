import React from "react";
import firebase from '../../../../firebase.js';
import "firebase/auth";
import './googleAuthButton.css';
import { IfFirebaseUnAuthed } from "@react-firebase/auth";


export default class GoogleAuthButton extends React.Component{
    
  render(){
    return(
      <IfFirebaseUnAuthed>
        {() => (
          <button
            onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
            }}
            className = "signInButton"
          >
            Sign In with Google
          </button>
        )}
      </IfFirebaseUnAuthed>
    );
  };
}