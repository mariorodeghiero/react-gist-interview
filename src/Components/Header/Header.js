import React, { Component } from "react";

import "./header.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="header">
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="">
              Welcome to Front-end Interview
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
