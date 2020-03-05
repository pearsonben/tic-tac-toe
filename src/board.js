import React from 'react'
import './board.css'

export default class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTurn : 1,
            boardState :  [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ],
            winner : null,
            currentMove : 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
    }

    resetBoard(){
        this.setState({
            currentTurn : 1,
            boardState :  [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ],
            winner : null,
            currentMove : 0
        });
    }

    handleClick(){
        const win = this.determineWinner();

        if(win === 1){
            this.setState({winner : 1})
        }
        else if(win === 2){
            this.setState({winner : 2})
        }
        else if(win === null){

        }


        if(this.state.currentTurn === 1){
            this.setState({
                currentTurn : 2,
                currentMove : this.state.currentMove + 1
            })
        }
        else{
            this.setState({
                currentTurn : 1,
                currentMove : this.state.currentMove + 1
            })
        }
    }

    determineWinner(){

        //horizontal checks
        for(let i = 0; i < this.state.boardState.length; i++){
            if(this.state.boardState[i][0] === 1 && this.state.boardState[i][1] === 1 && this.state.boardState[i][2] === 1){
                return 1;    
            }else if(this.state.boardState[i][0] === 2 && this.state.boardState[i][1] === 2 && this.state.boardState[i][2] === 2){
                return 2;
            }
        }

        //vertical checks
        for(let i = 0; i < this.state.boardState.length; i++){
            if(this.state.boardState[0][i] === 1 && this.state.boardState[1][i] === 1 && this.state.boardState[2][i] === 1){
                return 1;    
            }else if(this.state.boardState[0][i] === 2 && this.state.boardState[1][i] === 2 && this.state.boardState[2][i] === 2){
                return 2;
            }
        }

        //diagonal checks
        if(this.state.boardState[0][0] === 1 && this.state.boardState[1][1] === 1 && this.state.boardState[2][2] === 1){
            return 1;
        }else if(this.state.boardState[0][0] === 2 && this.state.boardState[1][1] === 2 && this.state.boardState[2][2] === 2){
            return 2;
        }

        if(this.state.boardState[0][2] === 1 && this.state.boardState[1][1] === 1 && this.state.boardState[2][0] === 1){
            return 1;
        }else if(this.state.boardState[0][2] === 2 && this.state.boardState[1][1] === 2 && this.state.boardState[2][0] === 2){
            return 2;
        }

    }

    render(){

        const newBoardState = this.state.boardState.slice();


        const nought = <i className="fa fa-circle-thin" aria-hidden="true"></i>
        const cross = <i className="fa fa-times" aria-hidden="true"></i>

        return(
            <div className="container">
                <p className="whos-turn">
                It is currently player {this.state.currentTurn}'s turn.
                </p>
                <p>
                    Turns: {this.state.currentMove}
                </p>
                <div className="row">
                    <div className="col-md-4">
                        
                        <button className="game-button" onClick={() => {
                            if(this.state.boardState[0][0] === 0){
                                newBoardState[0][0] = newBoardState[0][0] + this.state.currentTurn;
                                this.setState({boardState: newBoardState});
                                this.handleClick();
                            }
                            
                            
                        }}>
                            {(() => {
                                switch(this.state.boardState[0][0]){
                                    case 1 : return cross;
                                    case 2 : return nought;
                                    default : return null;
                                }
                            
                            })()}
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button className="game-button" onClick={() => {
                            if(this.state.boardState[0][1] === 0){
                                newBoardState[0][1] = newBoardState[0][1] + this.state.currentTurn;
                                this.setState({boardState: newBoardState});
                                this.handleClick();
                            }
                            
                            
                        }}>
                            {(() => {
                                switch(this.state.boardState[0][1]){
                                    case 1 : return cross;
                                    case 2 : return nought;
                                    default : return null;
                                }
                                
                            })()}
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button className="game-button" onClick={() => {
                            if(this.state.boardState[0][2] === 0){
                                newBoardState[0][2] = newBoardState[0][2] + this.state.currentTurn;
                                this.setState({boardState: newBoardState});
                                this.handleClick();
                            }
                            
                            
                        }}>
                            {(() => {
                                switch(this.state.boardState[0][2]){
                                    case 1 : return cross;
                                    case 2 : return nought;
                                    default : return null;
                                }
                                
                            })()}
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <button className="game-button" onClick={() => {
                            if(this.state.boardState[1][0] === 0){
                                newBoardState[1][0] = newBoardState[1][0] + this.state.currentTurn;
                                this.setState({boardState: newBoardState});
                                this.handleClick();
                            }
                            
                            
                        }}>
                            {(() => {
                                switch(this.state.boardState[1][0]){
                                    case 1 : return cross;
                                    case 2 : return nought;
                                    default : return null;
                                }
                                
                            })()}
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button className="game-button" onClick={() => {
                            if(this.state.boardState[1][1] === 0){
                                newBoardState[1][1] = newBoardState[1][1] + this.state.currentTurn;
                                this.setState({boardState: newBoardState});
                                this.handleClick();
                            }
                            
                            
                        }}>
                            {(() => {
                                switch(this.state.boardState[1][1]){
                                    case 1 : return cross;
                                    case 2 : return nought;
                                    default : return null;
                                }
                                
                            })()}
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button className="game-button" onClick={() => {
                            if(this.state.boardState[1][2] === 0){
                                newBoardState[1][2] = newBoardState[1][2] + this.state.currentTurn;
                                this.setState({boardState: newBoardState});
                                this.handleClick();
                            }
                            
                            
                        }}>
                            {(() => {
                                switch(this.state.boardState[1][2]){
                                    case 1 : return cross;
                                    case 2 : return nought;
                                    default : return null;
                                }
                                
                            })()}
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <button className="game-button" onClick={() => {
                            if(this.state.boardState[2][0] === 0){
                                newBoardState[2][0] = newBoardState[2][0] + this.state.currentTurn;
                                this.setState({boardState: newBoardState});
                                this.handleClick();
                            }
                            
                            
                        }}>
                            {(() => {
                                switch(this.state.boardState[2][0]){
                                    case 1 : return cross;
                                    case 2 : return nought;
                                    default : return null;
                                }
                                
                            })()}
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button className="game-button" onClick={() => {
                            if(this.state.boardState[2][1] === 0){
                                newBoardState[2][1] = newBoardState[2][1] + this.state.currentTurn;
                                this.setState({boardState: newBoardState});
                                this.handleClick();
                            }
                            
                            
                        }}>
                            {(() => {
                                switch(this.state.boardState[2][1]){
                                    case 1 : return cross;
                                    case 2 : return nought;
                                    default : return null;
                                }
                                
                            })()}
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button className="game-button" onClick={() => {
                            if(this.state.boardState[2][2] === 0){
                                newBoardState[2][2] = newBoardState[2][2] + this.state.currentTurn;
                                this.setState({boardState: newBoardState});
                                this.handleClick();
                            }
                            
                            
                        }}>
                            {(() => {
                                switch(this.state.boardState[2][2]){
                                    case 1 : return cross;
                                    case 2 : return nought;
                                    default : return null;
                                }
                                
                            })()}
                        </button>
                    </div>
                </div>
                <div className="footer">
                    <h1>The winner is: Player {this.state.winner}!</h1>
                    <button onClick={this.resetBoard}>
                        Play Again?
                    </button>
                </div>
                

            </div>
        )
    }
}