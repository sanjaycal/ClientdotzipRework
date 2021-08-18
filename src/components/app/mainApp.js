import React from 'react';
import ReactDOM from 'react-dom';
//import reportWebVitals from './reportWebVitals';
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
} from "@react-firebase/auth";


import MessageViewer from './messageViewer/messageViewer';
import SendMessage from './messageSender/messageSender';
import RoomSetter from './roomSetter/roomSetter';

export default class MainApp extends React.Component{

  constructor(props){
    super(props);

      this.state=
      {
        room:"main"
      };
        
      this.messageviewer = React.createRef(this.messageviewer);
    }

    handleRoomChange = (newRoom, uid) =>{
      this.setState({oldroom: this.state.room, room:newRoom, user:uid});
    }

    render(){
        return(
          <IfFirebaseAuthed>
          {() => (
          <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
              return (
                <div>
                  <RoomSetter parentCallback = {this.handleRoomChange} ref={this.messageviewer} user={user.uid}/>
                  <MessageViewer room={this.state.room} oldroom={this.state.oldroom} key={this.state.room} user={user.uid}/>
                  <SendMessage room={this.state.room} user={user.displayName} image={user.photoURL}/>
                </div>
              );
            }}
          </FirebaseAuthConsumer>
          )}
        </IfFirebaseAuthed>);
    }

}