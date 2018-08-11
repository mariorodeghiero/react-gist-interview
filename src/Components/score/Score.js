import React, { Component } from "react";

class Score extends Component {
  state = {};
  render() {
    return (
      <div className="card w-50 mx-auto">
        <div className="card-header text-center">
          <h2 className="text-muted">SCOREBOARD</h2>
        </div>

        <p className="text-muted pl-4 pt-4">
          Number of questions : {this.props.number}
        </p>
        <p className="text-muted pl-4">Total points : {this.props.points}</p>
      </div>
    );
  }
}

export default Score;
