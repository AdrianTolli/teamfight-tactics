import React, { Component } from "react";
import "./style.css";

class ContentHeader extends Component {
  render() {
    return (
      <div className="contentHeader">
        <div className="name">Name</div>
        <div className="classes">Class/Origin</div>
        <div className="cost">Cost</div>
        <div className="health">Health</div>
        <div className="armor">Armor/MR</div>
        <div className="attackspeed">AS/Range</div>
      </div>
    );
  }
}

export default ContentHeader;
