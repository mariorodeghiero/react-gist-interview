import React, { Component } from "react";

import "./header.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="header">
          <h1>Welcome to Front-End Interview</h1>
        </header>
      </div>
    );
  }
}

export default Header;
