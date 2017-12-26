import React, { Component } from 'react';
import './MessageDetailView.css';
import MessageHeaderView from '../MessageHeaderView'
import ContactDetailView from '../ContactDetailView'
import MessagesView from '../MessagesView'

class MessageDetailView extends Component {
  render() {
    return (
      <div className="MessageDetailView-container">
        <MessageHeaderView />
        <div className="MessageContents-container">
          <MessagesView />
          <ContactDetailView />
        </div>
      </div>
    );
  }
}

export default MessageDetailView;
