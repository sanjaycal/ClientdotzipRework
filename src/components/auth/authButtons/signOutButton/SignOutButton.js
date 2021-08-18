import React from "react";
import firebase from '../../../../firebase.js';
import "firebase/auth";
import './signOutButton.css';
import { IfFirebaseAuthed } from "@react-firebase/auth";


export default class SignOutButton extends React.Component{
  render(){
    return(
      <IfFirebaseAuthed>
        {() => (
          <button
            onClick={() => {
              firebase.auth().signOut();
            }}
            className = "signOutButton"
          >
            Sign Out
          </button>
        )}
      </IfFirebaseAuthed>
    ); 
  };
}