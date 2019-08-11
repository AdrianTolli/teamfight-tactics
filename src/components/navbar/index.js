import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbarButtons">
          <div className={`headerButton`} onClick={this.props.champClicked}>
            <span
              className={`buttonSpan ${
                this.props.displayedContent === "champions" ? "highlighted" : ""
              }`}
            >
              Champions
            </span>
          </div>
          <div className={`headerButton`} onClick={this.props.itemClicked}>
            <span
              className={`buttonSpan ${
                this.props.displayedContent === "items" ? "highlighted" : ""
              }`}
            >
              Items
            </span>
          </div>

          <div className={`headerButton`} onClick={this.props.tbClicked}>
            <span
              className={`buttonSpan ${
                this.props.displayedContent === "teambuilder"
                  ? "highlighted"
                  : ""
              }`}
            >
              Team builder
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
