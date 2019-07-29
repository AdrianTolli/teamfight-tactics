import React, { Component } from "react";
import "./style.css";

class Item extends Component {
  constructor() {
    super();
    this.state = {
      spriteURL: "https://solomid-resources.s3.amazonaws.com/blitz/tft/items/"
    };

    this.renderCombinations = this.renderCombinations.bind(this);
    this.findBonus = this.findBonus.bind(this);
    this.findCombination = this.findCombination.bind(this);
  }

  findBonus(name) {
    for (var i = 0; i < this.props.fullData.length; i++) {
      if (name === this.props.fullData[i].key) {
        return this.props.fullData[i].bonus;
      }
    }
  }
  findCombination(name, comboItem) {
    for (var i = 8; i < this.props.fullData.length; i++) {
      if (
        (name === this.props.fullData[i].buildsFrom[0] &&
          comboItem === this.props.fullData[i].buildsFrom[1]) ||
        (comboItem === this.props.fullData[i].buildsFrom[0] &&
          name === this.props.fullData[i].buildsFrom[1])
      ) {
        return this.props.fullData[i].key;
      }
    }
  }
  renderCombinations() {
    var itemCombination = [];
    for (var i = 0; i < this.props.data.buildsInto.length; i++) {
      itemCombination.push(
        <div className={`comboContainer ${i % 2 === 0 ? "" : "highlight"}`}>
          <img
            src={this.state.spriteURL + this.props.fullData[i].key + ".png"}
            alt=""
          />
          <span>→</span>
          <img
            src={
              this.state.spriteURL +
              this.findCombination(
                this.props.data.key,
                this.props.fullData[i].key
              ) +
              ".png"
            }
            alt=""
          />
          {this.findBonus(
            this.findCombination(
              this.props.data.key,
              this.props.fullData[i].key
            )
          )}
        </div>
      );
    }
    return itemCombination;
  }

  render() {
    return (
      <div className="itemCard">
        <div className="highlight">
          <img
            src={this.state.spriteURL + this.props.data.key + ".png"}
            alt=""
          />
          {this.props.data.name}
        </div>
        {this.renderCombinations()}
      </div>
    );
  }
}

export default Item;
