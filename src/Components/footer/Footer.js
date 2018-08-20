import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer className="bg-white  text-center p-4">
          <span role="img" aria-label="license symbol">
            ⚖️
          </span>MIT License
        </footer>
      </div>
    );
  }
}

export default Footer;
