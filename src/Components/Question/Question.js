import React, { Component } from "react";
import RenderGist from "react-render-gist";
import "./Question.scss";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      numberQuestion: 0,
      selectedOption: "",
      correctAnswer: [],
      pontos: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
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

              {question.option.map((option, index) => {
                return (
                  <div key={index} className="custom-control custom-radio m-2">
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
          );
        });
        let answers = data.map(question => {
          return question.answer;
        });
        this.setState({ questions: questions });
        this.setState({ correctAnswer: answers });
      });
  }

  handleClick(e) {
    console.log("resposta do teste:", this.state.correctAnswer);
    // if (
    //   this.state.questions[this.state.numberQuestion].answer ===
    //   this.state.selectedOption
    // ) {
    //   console.log("------------------------------------");
    //   console.log("sua resposta foi", this.state.pontos);
    //   console.log("------------------------------------");
    // }
    let number = this.state.numberQuestion + 1;
    this.setState({
      numberQuestion: number
    });
    e.preventDefault();
    console.log("resposta: ", this.state.selectedOption);
  }

  handleOptionChange(changeEvent) {
    this.setState({ selectedOption: changeEvent.target.value });
  }

  render() {
    return (
      <div className="card w-75 mx-auto">
        <form>
          {this.state.questions[this.state.numberQuestion]}
          <button
            type="submit"
            className="btn btn-dark m-2"
            onClick={this.handleClick}
          >
            Submit
          </button>
          {console.log("size: ", this.state.questions.length)}
          {console.log("number: ", this.state.numberQuestion)}
          {console.log("answer: ", this.state.selectedOption)}
        </form>
      </div>
    );
  }
}

export default Question;
