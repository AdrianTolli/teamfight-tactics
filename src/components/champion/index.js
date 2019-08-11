import React, { Component } from "react";
import "./style.css";

class Champion extends Component {
  constructor() {
    super();
    this.state = {
      filteredChamps: null
    };

    this.renderClass = this.renderClass.bind(this);
    this.filterChamps = this.filterChamps.bind(this);
  }

  renderClass() {
    var finalClasses = "";
    if (this.props.data.class.length === 1) {
      finalClasses = this.props.data.class[0];
    } else
      finalClasses = this.props.data.class[0] + ", " + this.props.data.class[1];

    return finalClasses;
  }

  filterChamps() {}

  render() {
    return (
      <div className={this.props.classname}>
        <div className="name">
          <img
            src={this.props.imgURL + this.props.data.key + ".png"}
            className="champSprite"
            alt=""
          />
          <div>{this.props.data.name}</div>
        </div>
        <div className="classes">
          {this.renderClass()} <span>/</span> {this.props.data.origin}
        </div>
        <div className="cost">{this.props.data.cost}</div>
        <div className="health">{this.props.data.stats.defense.health}</div>
        <div className="armor">
          {this.props.data.stats.defense.armor}
          <span>/</span>
          {this.props.data.stats.defense.magicResist}
        </div>
        <div className="attackspeed">
          {this.props.data.stats.offense.attackSpeed}
          <span>/</span>
          {this.props.data.stats.offense.range}
        </div>
      </div>
    );
  }
}

export default Champion;
