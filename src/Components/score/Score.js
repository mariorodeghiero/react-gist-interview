import React, { Component } from "react";
import "./Score.scss";

class Score extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h2 className="title-score text-center text-muted"> Dashboard </h2>
        <div className="row">
          <div className="card w-25 shadow mx-auto">
            <div className="card-header text-center"> Questions</div>
            <p className="text-muted pl-4 pt-4">
              Number of questions : {this.props.number}
            </p>
          </div>
          <div className="card w-25 shadow mx-auto">
            <div className="card-header text-center"> Wrong answers </div>
            <p className="text-muted pl-4 pt-4">
              Wrong answers : {this.props.number}
            </p>
          </div>
          <div className="card w-25 shadow mx-auto">
            <div className="card-header text-center"> Right answers </div>
            <p className="text-muted pl-4">
              Total points : {this.props.points}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
