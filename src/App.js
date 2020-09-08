import React, { Component } from 'react';
import './App.css';
import Story_Card from './Story_Card.js';
import Story_Card_C from './Story_Card_C';

function App() {
  return (
    <div className="App">  
        <Story_Card_C />
        <Story_Card />
    </div>
  );
}

export default App;
