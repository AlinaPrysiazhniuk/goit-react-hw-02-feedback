import React, { Component } from "react";
import css from "./Feedback.module.css"

class Feedback extends Component{
state = {
    good: 0,
    neutral: 0,
    bad: 0
}

handleClickButtonGood = (event) => {
//console.log(event.target);
this.setState((prevState) => ({
    good: prevState.good + 1,
}))
console.log(this.state.good);
}



handleClickButtonNeutral = (event) => {
      //  console.log(event.target);
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }))
        console.log(this.state.neutral);
        }

handleClickButtonBad = (event) => {
            //console.log(event.target);
            this.setState((prevState) => ({
                bad: prevState.bad + 1,
            }))
            console.log(this.state.bad);
            }

render () {
    return (
        <div>
            <p>Please leave feedback</p>
            <button type="button" onClick={this.handleClickButtonGood}>Good</button>
            <button type="button" onClick={this.handleClickButtonNeutral}>Neutral</button>
            <button type="button" onClick={this.handleClickButtonBad}>Bad</button>

            <p>Statictis</p>
            <ul>
                <li className={css.item}>Good
                <p>{this.state.good}</p>
                </li>
                <li className={css.item}>Neutral
                <p>{this.state.neutral}</p>
                </li>
                <li className={css.item}>Bad
                    <p>{this.state.bad}</p>
                </li>
            </ul>

        </div>)
}

}

export default Feedback;