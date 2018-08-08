import React, { Component } from "react";
import "./Timer.scss";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  tick() {
    if (this.state.seconds >= 60) {
      this.setState({ seconds: 0, minutes: this.state.minutes + 1 });
      if (this.state.minutes >= 60) {
        this.setState({ minutes: 0, hours: this.state.hours + 1 });
      }
    }
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="timer">
        <p>
          {this.state.hours}:
          {this.state.minutes}:{this.state.seconds}
        </p>
      </div>
    );
  }
}

export default Timer;
