import React, { Component } from "react";

import "./header.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="header">
          <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
              Welcome to Front-end Interview
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
