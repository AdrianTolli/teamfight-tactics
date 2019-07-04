import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        {this.props.displayedContent === "champions" ? (
          <div className="navbar">
            <span
              className="headerButton highlighted"
              onClick={this.props.champClicked}
            >
              Champions
            </span>
            <span className="headerButton" onClick={this.props.itemClicked}>
              Items
            </span>
            <span className="headerButton" onClick={this.props.tbClicked}>
              Team builder
            </span>
          </div>
        ) : this.props.displayedContent === "items" ? (
          <div className="navbar">
            <span className="headerButton" onClick={this.props.champClicked}>
              Champions
            </span>
            <span
              className="headerButton highlighted"
              onClick={this.props.itemClicked}
            >
              Items
            </span>
            <span className="headerButton" onClick={this.props.tbClicked}>
              Team builder
            </span>
          </div>
        ) : this.props.displayedContent === "teambuilder" ? (
          <div className="navbar">
            <span className="headerButton" onClick={this.props.champClicked}>
              Champions
            </span>
            <span className="headerButton" onClick={this.props.itemClicked}>
              Items
            </span>

            <span
              className="headerButton highlighted"
              onClick={this.props.tbClicked}
            >
              Team builder
            </span>
          </div>
        ) : (
          <div className="navbar">
            <span className="headerButton" onClick={this.props.champClicked}>
              Champions
            </span>
            <span className="headerButton" onClick={this.props.itemClicked}>
              Items
            </span>
            <span className="headerButton" onClick={this.props.tbClicked}>
              Team builder
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
