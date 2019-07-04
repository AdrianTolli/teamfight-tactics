import React, { Component } from "react";
import "./style.css";

class Champion extends Component {
  constructor() {
    super();
    this.state = {
      filteredChamps: null
    };

    this.renderClasses = this.renderClasses.bind(this);
    this.filterChamps = this.filterChamps.bind(this);
  }

  renderClasses() {
    var class1 = "";
    var class2 = "";
    var class3 = null;
    for (var i = 0; i < this.props.data.classes.length; i++) {
      i === 0
        ? (class1 = this.props.data.classes[i])
        : i === 1
        ? (class2 = this.props.data.classes[i])
        : (class3 = this.props.data.classes[i]);
    }
    var finalClasses = "";
    class3 === null
      ? (finalClasses = class1 + "/" + class2)
      : (finalClasses = class1 + "/" + class2 + "/" + class3);

    return finalClasses;
  }

  filterChamps() {}

  render() {
    return (
      <div className={this.props.classname}>
        <div className="name">
          <img
            src={this.props.imgURL + this.props.data.img}
            className="champSprite"
          />
          {this.props.data.name}
        </div>
        <div className="classes">{this.renderClasses()}</div>
        <div className="cost">{this.props.data.cost}</div>
        <div className="health">{this.props.data.health}</div>
        <div className="armor">
          {this.props.data.armor}
          <span>/</span>
          {this.props.data.magicResist}
        </div>
        <div className="attackspeed">
          {this.props.data.attackSpeed}
          <span>/</span>
          {this.props.data.range}
        </div>
      </div>
    );
  }
}

export default Champion;
