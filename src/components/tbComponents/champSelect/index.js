import React, { Component } from "react";
import "./style.css";

import TbChamp from "../tbChamp";

class ChampSelect extends Component {
  constructor() {
    super();

    this.renderOriginSelect = this.renderOriginSelect.bind(this);
    this.renderClassSelect = this.renderClassSelect.bind(this);
    this.renderChampsWithOriginShown = this.renderChampsWithOriginShown.bind(
      this
    );
    this.renderChampsWithClassShown = this.renderChampsWithClassShown.bind(
      this
    );
  }

  renderOriginSelect() {
    var originArray = [];
    for (var i = 0; i < this.props.originData.length; i++) {
      let key = this.props.originData[i].name;
      originArray.push(
        <div
          key={this.props.originData[i].key}
          className="imgDiv"
          onClick={() => this.props.changeOrigin(key)}
        >
          <img
            className="image"
            value={this.props.originData[i].key}
            src={require("../../../images/" +
              this.props.originData[i].key +
              ".png")}
            alt=""
          />
          <span className="text">{this.props.originData[i].name}</span>
        </div>
      );
    }
    return (
      <div className="selection">
        <h2>Origin</h2>
        <div className="originContainer">{originArray}</div>
      </div>
    );
  }
  renderClassSelect() {
    var classArray = [];
    for (var i = 0; i < this.props.classData.length; i++) {
      let key = this.props.classData[i].name;
      classArray.push(
        <div
          key={this.props.classData[i].key}
          className="imgDiv"
          onClick={() => this.props.changeClass(key)}
        >
          <img
            className="image"
            value={this.props.classData[i].key}
            src={require("../../../images/" +
              this.props.classData[i].key +
              ".png")}
            alt=""
          />
          <span className="text">{this.props.classData[i].name}</span>
        </div>
      );
    }
    return (
      <div className="selection">
        <h2>Class</h2> <div className="originContainer">{classArray}</div>
      </div>
    );
  }

  renderChampsWithOriginShown() {
    var champObject = [];
    for (var i = 0; i < this.props.showedChampsWithOrigin.length; i++) {
      champObject.push(
        <TbChamp
          addChamp={this.props.addChamp}
          name={this.props.showedChampsWithOrigin[i]}
        />
      );
    }
    return (
      <div className="innerShownChamps">
        <span className="title">{this.props.selectedOrigin}</span>
        {champObject}
      </div>
    );
  }
  renderChampsWithClassShown() {
    var champObject = [];
    for (var i = 0; i < this.props.showedChampsWithClass.length; i++) {
      champObject.push(
        <TbChamp
          addChamp={this.props.addChamp}
          name={this.props.showedChampsWithClass[i]}
        />
      );
    }
    return (
      <div className="innerShownChamps">
        <span className="title">{this.props.selectedClass}</span> {champObject}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="selectionContainer">
          {this.renderOriginSelect()}
          {this.renderClassSelect()}
        </div>
        <div className="championSelect">
          <div className="shownChamps">
            {this.renderChampsWithOriginShown()}
          </div>
          <div className="shownChamps">{this.renderChampsWithClassShown()}</div>
        </div>
      </div>
    );
  }
}

export default ChampSelect;
