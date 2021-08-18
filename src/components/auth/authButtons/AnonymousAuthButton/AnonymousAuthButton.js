import React from "react";
import firebase from '../../../../firebase.js';
import "firebase/auth";
import './anonymousAuthButton.css';
import { IfFirebaseUnAuthed } from "@react-firebase/auth";


export default class AnonymousAuthButton extends React.Component{
    
  render(){
    return(
      <IfFirebaseUnAuthed>
        {() => (
          <button
            onClick={() => {
              firebase.auth().signInAnonymously();
            }}
            className = "signInButton"
          >
            Sign In Anonymously
          </button>
        )}
      </IfFirebaseUnAuthed>
    );
  };
}