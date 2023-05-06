import React, { Component } from "react";

class Feedback extends Component{
state = {
    good: 0,
    neutral: 0,
    bad: 0
}

handleClickButton = (event) => {
console.log(event.target);
}

render () {
    return (
        <div>
            <p>Please leave feedback</p>
            <button type="button" onClick={this.handleClickButton}>Good</button>
            <button type="button" onClick={this.handleClickButton}>Neutral</button>
            <button type="button" onClick={this.handleClickButton}>Bad</button>
        </div>
    )
}

}

export default Feedback;