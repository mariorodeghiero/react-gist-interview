import React, { Component } from "react";
import "./Score.scss";

import Warning from "../../warning.svg";
import Info from "../../info.svg";
import Trophy from "../../trophy.svg";

class Score extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card w-25 shadow mx-auto">
            <div className="row">
              <div>
                <img className="icon" src={Info} alt="Warging" />
              </div>
              <div className="result">{this.props.number}</div>
            </div>
            <div className="description text-center">
              <p>Questions</p>
            </div>
          </div>
          <div className="card w-25 shadow mx-auto">
            <div className="row">
              <div>
                <img className="icon" src={Warning} alt="Warging" />
              </div>
              <div className="result">
                {this.props.number - this.props.points}
              </div>
            </div>
            <div className="description text-center">
              <p>Wrong</p>
            </div>
          </div>
          <div className="card w-25 shadow mx-auto">
            <div className="row">
              <div>
                <img className="icon" src={Trophy} alt="Warging" />
              </div>
              <div className="result">{this.props.points}</div>
            </div>
            <div className="description text-center">
              <p>Sucessful</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
