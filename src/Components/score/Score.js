import React, { Component } from "react";
import "./Score.scss";

import Warning from "../../warning.svg";

class Score extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h2 className="title-score text-center text-muted"> Dashboard </h2>
        <div className="row">
          <div className="card w-25 shadow mx-auto">
            <div className="row">
              <div>
                <img className="icon" src={Warning} alt="Warging" />
              </div>
              <p className="result">{this.props.number}</p>
            </div>
            <div className="text-muted text-center">
              <p>Questions</p>
            </div>
          </div>
          <div className="card w-25 shadow mx-auto">
            <div className="row">
              <div>
                <img className="icon" src={Warning} alt="Warging" />
              </div>
              <p className="result">{this.props.number}</p>
            </div>
            <div className="text-muted text-center">
              <p>Wrong</p>
            </div>
          </div>
          <div className="card w-25 shadow mx-auto">
            <div className="row">
              <div>
                <img className="icon" src={Warning} alt="Warging" />
              </div>
              <p className="result">{this.props.points}</p>
            </div>
            <div className="text-muted text-center">
              <p>Sucessful</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
