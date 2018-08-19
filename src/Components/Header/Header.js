import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="header ">
          <nav className="navbar navbar-dark bg-white ">
            <a className="navbar-brand">&lt;/&gt; Gist Interview</a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
