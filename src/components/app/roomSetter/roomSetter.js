import React from 'react';
import './roomSetter.css';

export default class RoomSetter extends React.Component{
  constructor(props){
    super(props);
    this.roomBox = React.createRef(this.roomBox);
  }
    
  //This function 
  setRoom = (event) => {
    const input = this.roomBox.current;
    console.log(input.value)
    this.props.parentCallback(input.value, this.props.user);
  }
  
  render(){
    return(
      <div className="roomChanger">
        <input type="text" placeholder="room" ref={this.roomBox} defaultValue = "main" className="roomsetterbox"></input>
        <button onClick={() => this.setRoom()}>SetRoom</button>
      </div>
    )
  }
}