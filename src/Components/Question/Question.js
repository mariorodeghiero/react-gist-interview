import React, { Component } from "react";
import "./Question.scss";

class Question extends Component {
  state = {};
  render() {
    return (
      <div className="card w-75 mx-auto">
        <div className="card-header">
          1 - Question: What is the value of foo?
        </div>
        <form>
          <div class="custom-control custom-radio m-2">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadio1">
              10
            </label>
          </div>
          <div class="custom-control custom-radio m-2">
            <input
              type="radio"
              id="customRadio2"
              name="customRadio"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadio2">
              20
            </label>
          </div>
          <div class="custom-control custom-radio m-2">
            <input
              type="radio"
              id="customRadio3"
              name="customRadio"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadio3">
              30
            </label>
          </div>
          <div class="custom-control custom-radio m-2">
            <input
              type="radio"
              id="customRadio4"
              name="customRadio"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadio4">
              1020
            </label>
          </div>
          <button type="submit" class="btn btn-dark m-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Question;
