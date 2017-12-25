import React, { Component } from 'react';
import './App.css';
import ConversationListView from './components/ConversationListView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ConversationListView />
      </div>
    );
  }
}

export default App;
