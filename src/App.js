import React, { Component } from "react";

import "./index.scss";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Question from "./Components/question/Question";
import Timer from "./Components/timer/Timer";
import Home from "./Components/home/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus() {
    this.setState({
      status: true
    });
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.status ? (
          <div>
            <Timer />
            <Question />
          </div>
        ) : (
          <a onClick={this.changeStatus}>
            <Home />
          </a>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
