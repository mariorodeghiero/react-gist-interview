import React, { Component } from "react";

import "./header.scss";
import GitHub from "../../github.svg";
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="header ">
          <nav className="navbar navbar-dark bg-white ">
            {/* <img className="github-icon" src={GitHub} alt="" /> */}
            <a className="navbar-brand" href="">
              GitHubGist Interview
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
