import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRunning: props.status
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  tick() {
    if (this.state.seconds >= 60) {
      this.setState({
        seconds: 0,
        minutes: this.state.minutes + 1
      });
      if (this.state.minutes >= 60) {
        this.setState({
          minutes: 0,
          hours: this.state.hours + 1
        });
      }
    }
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  start() {
    // this.setState({ isRunning: true });
    this.interval = setInterval(() => this.tick(), 1000);
  }

  stop() {
    this.setState(
      {
        isRunning: true
      },
      () => {
        clearInterval(this.interval);
      }
    );
  }

  componentDidMount() {
    if (!this.state.isRunning) {
      this.start();
    } else {
      this.stop();
    }
  }

  render() {
    return (
      <div className="timer">
        <p className="numbers">
          <span>{this.state.hours}</span>:<span>{this.state.minutes}</span>:<span
          >
            {this.state.seconds}
          </span>
        </p>
      </div>
    );
  }
}

export default Timer;
