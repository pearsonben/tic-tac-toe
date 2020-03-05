import React from 'react';
import Board from './board.js'
import './App.css';

 export default class App extends React.Component {

  render(){
    return (
      <div className="App">
        <div className="header">
          <h1 className="title">
            Welcome to Tic-Tac-Toe!
          </h1>
        </div>
        <div className="game-board">
          <Board />
        </div>
        
      </div>
    );
  }
  
}


