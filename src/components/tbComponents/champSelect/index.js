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
        <span className="title">Origin</span>
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
        <span className="title">Class</span>{" "}
        <div className="originContainer">{classArray}</div>
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
    return <div className="innerShownChamps">{champObject}</div>;
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
    return <div className="innerShownChamps">{champObject}</div>;
  }

  render() {
    return (
      <div className="champSelectContainer">
        <div className="selectionContainer">
          {this.renderOriginSelect()}
          <div className="championSelect">
            <div className="shownChamps">
              <span className="title">{this.props.selectedOrigin}</span>
              {this.renderChampsWithOriginShown()}
            </div>
          </div>
        </div>
        <div className="selectionContainer">
          {this.renderClassSelect()}
          <div className="championSelect">
            <div className="shownChamps">
              <span className="title">{this.props.selectedClass}</span>
              {this.renderChampsWithClassShown()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChampSelect;
