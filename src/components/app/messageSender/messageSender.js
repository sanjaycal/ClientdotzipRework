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

    if(input.value.length<3000 && input.value.length>=1){
      //const analytics = firebase.analytics().getAnalytics();
    if ((input.value.startsWith("http://")||input.value.startsWith("https://"))&&(input.value.endsWith(".jpg")||input.value.endsWith(".png"))){
      mainref.push({message:input.value, author:this.props.user, image:this.props.image, isImage: true});
      firebase.analytics().logEvent( 'send_message', {
        content_type: 'image'
      });
    }else{
      mainref.push({message:input.value, author:this.props.user, image:this.props.image, isImage: false});
      firebase.analytics().logEvent( 'send_message', {
        content_type: 'text'
      });
    }
    }else{
      alert("message too long");
    }
    input.value = "";
  }

  render(){
    return(
    <div className="messageSender">
      <input type="text" placeholder="message" ref={this.inputBox} className="messageInputBox" onKeyPress={(e) => e.key === 'Enter' && this.sendMessage()}/>
      <button onClick={() => this.sendMessage()} className="messageSendButton">Send</button>
    </div>
    );
  }
}