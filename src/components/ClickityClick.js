// Code ClickityClick Component Here
import React, { Component } from 'react';

class ClickityClick extends Component {
    constructor() {
        super();

        this.state ={
            count: 0,
            hasBeenClicked: false
        };
    }
    handleClick = () => {
        this.setState(previousState => {
            return {
                count: previousState.count + 1,
                hasBeenClicked: true,
                currentTheme: 'blue',
            }
            
        },() => console.log(this.state.hasBeenClicked))
        console.log(this.state.hasBeenClicked);
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <p>I have {this.state.hasBeenClicked ? null : 'not'}  been Clicked! </p>
                <button onClick={this.handleClick}> Clicke me</button>
            </div>
        )
    }
}

export default ClickityClick;