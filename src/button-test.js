import React from 'react'

export default class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {toggle : 0};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.state.toggle === 2){
            this.setState({toggle : 0})
        }
        else{
            this.setState({toggle: this.state.toggle + 1})
        }
    }

    

    render () {
        return (
            <div>

                <button onClick={this.handleClick}>
                    {this.state.toggle}
                </button>
            </div>
    )
  }
}