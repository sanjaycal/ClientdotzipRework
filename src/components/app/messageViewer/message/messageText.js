import React from 'react';
import "./message.css";


export default class MessageText extends React.Component{

  constructor(props){
    super(props);
    this.state = {isImage: this.props.isImage}
  }

  render(){
    if(this.state.isImage){
      return(
        <img src={this.props.message} alt={this.props.message} className="messageImage"></img>
      );
    } else {
      return(
        <h2 className="messageText">{this.props.message}</h2>
      );
    }
  };
}