import React from 'react';
import './messageViewer.css';
import firebase from './../../../firebase.js';
import Message from "./message/message.js";

//This Component takes the messages from the firebase realtime database and displays it to the user by making multiple message components
export default class MessageViewer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
  }
  
  componentDidMount(){

    // Sets the room in the user's section of the database
    const userref = firebase.database().ref("main/users/" + this.props.user);
    userref.set ({room: this.props.room});
  
    //removes user from previous room
    const oldroomref = firebase.database().ref("main/rooms/"+this.props.oldroom+"/users/" + this.props.user)
    oldroomref.set({})
  
    //Adds user to new room
    const roomref = firebase.database().ref("main/rooms/"+this.props.room+"/users/" + this.props.user)
    roomref.set({inRoom:true})
  

    //sets the messages variable in state to the messages in the current room
    const dataref = firebase.database().ref("main/rooms/"+this.props.room+"/messages");
    dataref.on("value", (snapshot) => {
      let messages = snapshot.val();
      let newState = [];
      for(let message in messages){
        newState.push({
          id: message,
          message: messages[message].message,
          author: messages[message].author,
          picture: messages[message].image,
          isImage: messages[message].isImage,
        });
      }
      newState = newState.reverse();
      this.setState({messages: newState});
    })
  }
  
  render(){
    return(
      <div className="messageViewer">
          {this.state.messages.map((message) => {
            return (
              <Message key={message.id} authour={message.author} message={message.message} image={message.picture} isImage={message.isImage}/>
            )
          })}
      </div>
    )
  }
}