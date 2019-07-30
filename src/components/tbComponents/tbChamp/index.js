import React, { Component } from "react";
import "./style.css";

class TbChamp extends Component {
  render() {
    return (
      <div
        className="pointer margin"
        onClick={() => this.props.addChamp(this.props.name)}
      >
        {this.props.name}
      </div>
    );
  }
}

export default TbChamp;
