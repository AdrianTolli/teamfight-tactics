import React, { Component } from "react";
import "./style.css";

class ContentHeader extends Component {
  render() {
    return (
      <div className="contentHeader">
        <div className="name">
          <span className="spanname" onClick={this.props.sortByName}>
            Name
          </span>
        </div>
        <div className="classes">
          <span className="spanclass" onClick={this.props.sortByClass}>
            Class
          </span>
          <span>/</span>
          <span className="spanorigin" onClick={this.props.sortByOrigin}>
            Origin
          </span>
        </div>
        <div className="cost">
          <span className="spancost" onClick={this.props.sortByCost}>
            Cost
          </span>
        </div>
        <div className="health">
          <span className="spanhealth" onClick={this.props.sortByHealth}>
            Health
          </span>
        </div>
        <div className="armor">
          <span className="spanarmor">Armor/MR</span>
        </div>
        <div className="attackspeed">
          <span className="spanattackspeed">AS/Range</span>
        </div>
      </div>
    );
  }
}

export default ContentHeader;
