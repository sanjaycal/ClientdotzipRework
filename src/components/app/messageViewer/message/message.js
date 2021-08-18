import React from 'react';
import "./message.css";
import MessageText from "./messageText.js"

//Message class that handles all the data 
export default class Message extends React.Component{

  render(){
    return(
      <div className="message">
        <img src={this.props.image} className="profilePicture" alt={this.props.authour}></img>
        <h4 className="authorText">{this.props.authour}</h4>
        <MessageText message={this.props.message} isImage={this.props.isImage}/>
      </div>
    );
  }  
}