import React, { Component } from "react";
import "./style.css";

class Item extends Component {
  constructor() {
    super();

    this.renderCombinations = this.renderCombinations.bind(this);
    this.findItem = this.findItem.bind(this);
  }

  findItem(name) {
    for (var i = 0; i < this.props.fullData.items.length; i++) {
      if (name === this.props.fullData.items[i].name) {
        console.log("Found:");
        console.log(this.props.fullData.items[i].img);
        return <img src={this.props.fullData.items[i].img} />;
      }
    }
  }

  renderCombinations() {
    var itemCombination = [];
    for (var i = 0; i < this.props.data.combinations.length; i++) {
      i % 2 === 0
        ? itemCombination.push(
            <div className="comboContainer">
              {this.findItem(this.props.data.combinations[i].name)}{" "}
              <span>→</span>
              <img src={this.props.data.combinations[i].comboImg} />{" "}
              <span>{this.props.data.combinations[i].stat}</span>
            </div>
          )
        : itemCombination.push(
            <div className="comboContainer highlight">
              {this.findItem(this.props.data.combinations[i].name)}{" "}
              <span>→</span>
              <img src={this.props.data.combinations[i].comboImg} />{" "}
              <span>{this.props.data.combinations[i].stat}</span>
            </div>
          );
    }
    return itemCombination;
  }

  render() {
    return (
      <div className="itemCard">
        <div className="highlight">
          <img src={this.props.data.img} />
          {this.props.data.name}
        </div>
        {this.renderCombinations()}
      </div>
    );
  }
}

export default Item;
