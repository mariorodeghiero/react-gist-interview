import React, { Component } from "react";
import "./Question.scss";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3001/questions";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        let questions = data.map((question, index) => {
          return (
            <div key={index}>
              <p>{question.question}</p>
            </div>
          );
        });
        this.setState({ questions: questions });
      });
  }

  render() {
    return (
      <div className="card w-75 mx-auto">
        <div className="card-header">{this.state.questions[0]}</div>
        <form>
          <div className="custom-control custom-radio m-2">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" htmlFor="customRadio1">
              {}
            </label>
          </div>
          <button type="submit" className="btn btn-dark m-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Question;
