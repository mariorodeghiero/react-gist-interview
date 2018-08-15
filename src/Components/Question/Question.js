import React, { Component } from "react";
import RenderGist from "react-render-gist";
import Score from "../score/Score";
import Timer from "../timer/Timer";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      numberQuestion: 0,
      selectedOption: "",
      correctAnswers: [],
      points: 0,
      finished: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.CheckPoints = this.CheckPoints.bind(this);
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
              <div className="code">
                <h6>Code:</h6>
                <RenderGist gist={question.gistId} />
              </div>
              <div className="options">
                {question.option.map((option, index) => {
                  return (
                    <div
                      key={index}
                      className="custom-control custom-radio m-2"
                    >
                      <input
                        type="radio"
                        id={"customRadio" + index}
                        name="customRadio"
                        className="custom-control-input"
                        value={option}
                        onChange={this.handleOptionChange}
                        // defaultChecked
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
              </div>
            </div>
          );
        });
        let answers = data.map(question => {
          return question.answer;
        });
        this.setState({ questions: questions });
        this.setState({ correctAnswers: answers });
      });
  }

  CheckPoints() {
    let answerCorret = this.state.correctAnswers[this.state.numberQuestion];
    let answerSelect = this.state.selectedOption;
    if (answerSelect == answerCorret) {
      this.setState({
        points: this.state.points + 1
      });
    }
  }

  handleClick(e) {
    this.CheckPoints();
    let number = this.state.numberQuestion + 1;
    this.setState({
      numberQuestion: number
    });
    if (number >= this.state.questions.length) {
      this.setState({
        finished: true
      });
    }
    e.preventDefault();
  }

  handleOptionChange(changeEvent) {
    this.setState({ selectedOption: changeEvent.target.value });
  }

  render() {
    if (this.state.finished === true) {
      return (
        <div>
          <Score
            points={this.state.points}
            number={this.state.numberQuestion}
          />
          <Timer status={this.state.finished} />
        </div>
      );
    } else {
      return (
        <div>
          <Timer status={this.state.finished} />

          <div className="card w-75 mx-auto shadow p-3 mb-5 bg-white rounded animated fadeIn slower">
            <form onSubmit={this.handleClick}>
              {this.state.questions[this.state.numberQuestion]}
              <button type="submit" className="btn m-2 shadow-sm rounded">
                Submit
              </button>
              {console.log("-------------------------")}
              {console.log("Questions size: ", this.state.questions.length)}
              {console.log("Number of question: ", this.state.numberQuestion)}
              {console.log("Answer select: ", this.state.selectedOption)}
              {console.log("Points: ", this.state.points)}
              {console.log("Answers: ", this.state.correctAnswers)}
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Question;
