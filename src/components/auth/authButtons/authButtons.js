import React from "react";
import "firebase/auth";
import GoogleAuthButton from "./googleAuthButton/GoogleAuthButton.js";
import SignOutButton from "./signOutButton/SignOutButton.js";


export default class AuthButtons extends React.Component{
  render(){
    return(
      <div>
        <GoogleAuthButton />
        <SignOutButton />
      </div>
    );
  }
}