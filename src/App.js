import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.scss";
import "./index.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Question from "./Components/Question/Question";

class App extends Component {
  render() {
    return (
      <div>
        <div className="general">
          <Header />
          <Question />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
