import React, { Component } from 'react';
import './App.css';
import ConversationListView from './components/ConversationListView'
import MessageDetailView from './components/MessageDetailView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <ConversationListView />
          <MessageDetailView />
        </div>
      </div>
    );
  }
}

export default App;
