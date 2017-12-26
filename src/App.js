import React, { Component } from 'react';
import './App.css';
import AppBarHeaderView from './components/AppBarHeaderView';
import ConversationListView from './components/ConversationListView/ConversationListView';
import MessageDetailView from './components/MessageDetailView/MessageDetailView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="container-left">
            <AppBarHeaderView />
            <ConversationListView />
          </div>
          <MessageDetailView />
        </div>
      </div>
    );
  }
}

export default App;
