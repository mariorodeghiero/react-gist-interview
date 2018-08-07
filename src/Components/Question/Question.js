import React, { Component } from "react";
import RenderGist from "react-render-gist";
import "./Question.scss";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      numberQuestion: 0
    };

    this.handleClick = this.handleClick.bind(this);
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
        this.setState({ questions: questions });
      });
  }

  handleClick(e) {
    let number = +1;
    this.setState({
      numberQuestion: number
    });
    e.preventDefault();
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
        </form>
      </div>
    );
  }
}

export default Question;
