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
              <div className="card-header">{question.question}</div>
              <form>
                {question.option.map((option, index) => {
                  return (
                    <div className="custom-control custom-radio m-2">
                      <input
                        type="radio"
                        id={"customRadio" + index}
                        name="customRadio"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={"customRadio" + index}
                      >
                        {option}
                      </label>
                    </div>
                  );
                })}
                <button type="submit" className="btn btn-dark m-2">
                  Submit
                </button>
              </form>
            </div>
          );
        });
        this.setState({ questions: questions });
      });
  }

  render() {
    return <div className="card w-75 mx-auto">{this.state.questions[0]}</div>;
  }
}

export default Question;
