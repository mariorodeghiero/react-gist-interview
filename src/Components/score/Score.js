import React, { Component } from "react";

class Score extends Component {
  state = {};
  render() {
    return (
      <div className="card w-50 mx-auto">
        <div className="card-header text-center">
          <h2>SCOREBOARD</h2>
        </div>

        <p>Number of questions : {this.props.number}</p>
        <p>Total points : {this.props.points}</p>
      </div>
    );
  }
}

export default Score;
