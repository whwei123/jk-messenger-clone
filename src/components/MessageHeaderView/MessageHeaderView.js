import React, { Component } from 'react';
import './MessageHeaderView.css'

class MessageHeaderView extends Component {
  render() {
    return (
      <div className="MessageHeaderView-container">
        <div className="contact-header">
          <span className="name">{this.props.name || "FirstName LastName"}</span>
          <span className="status">{this.props.status || "Active"}</span>
        </div>
        <div className="button-container">
          <button className="button"></button>
          <button className="button"></button>
          <button className="button"></button>
        </div>
      </div>
    );
  }
}

export default MessageHeaderView;