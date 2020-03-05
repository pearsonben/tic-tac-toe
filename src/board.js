import React from 'react'
import Square from './square.js'

export default class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTurn : 1,
            boardState :  [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

        if(this.state.currentTurn === 1){
            this.setState({currentTurn : 2})
        }
        else{
            this.setState({currentTurn : 1})
        }

    }

    render(){

        const newBoardState = this.state.boardState.slice();

        const nought = <i className="fa fa-circle-thin" aria-hidden="true"></i>
        const cross = <i className="fa fa-times" aria-hidden="true"></i>

        return(
            <div className="container">

                <div className="row">
                    <div className="col-sm">
                        
                        <button onClick={() => {
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
                    <div className="col-sm">
                        <button onClick={() => {
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
                    <div className="col-sm">
                        <button onClick={() => {
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
                    <div className="col-sm">
                        <button onClick={() => {
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
                    <div className="col-sm">
                        <Square position="5"/>
                    </div>
                    <div className="col-sm">
                        <Square position="6"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <Square position="7"/>
                    </div>
                    <div className="col-sm">
                        <Square position="8"/>
                    </div>
                    <div className="col-sm">
                        <Square position="9"/>
                    </div>
                </div>
            </div>
        )
    }
}