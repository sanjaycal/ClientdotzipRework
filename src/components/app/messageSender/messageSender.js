import React from 'react';
import firebase from '../../../firebase.js';
import './messageSender.css';

//This class handles sending messages
export default class SendMessage extends React.Component{
  constructor(props){
    super(props);
    this.inputBox = React.createRef(this.inputBox);
  }

  //This is the function that sends messages
  sendMessage(){
    const mainref = firebase.database().ref("main/rooms/"+this.props.room+"/messages");
    const input = this.inputBox.current;
    if ((input.value.startsWith("http://")||input.value.startsWith("https://"))&&(input.value.endsWith(".jpg")||input.value.endsWith(".png"))){
      mainref.push({message:input.value, author:this.props.user, image:this.props.image, isImage: true});
    }else{
      mainref.push({message:input.value, author:this.props.user, image:this.props.image, isImage: false});
    }
    input.value = "";
  }

  render(){
    return(
    <div className="messageSender">
      <input type="text" placeholder="message" ref={this.inputBox} className="messageInputBox"/>
      <button onClick={() => this.sendMessage()} className="messageSendButton">Send</button>
    </div>
    );
  }
}