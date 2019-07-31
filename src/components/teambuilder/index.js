import React, { Component } from "react";
import "./style.css";

import ChampSelect from "../tbComponents/champSelect";
import MyTeam from "../tbComponents/myTeam";

class Teambuilder extends Component {
  constructor() {
    super();
    this.state = {
      selectedOrigin: "",
      selectedClass: "",
      showedChampsWithOrigin: [],
      showedChampsWithClass: [],
      myChamps: []
    };

    this.addChamp = this.addChamp.bind(this);
    this.removeChamp = this.removeChamp.bind(this);
    this.changeClass = this.changeClass.bind(this);
    this.changeOrigin = this.changeOrigin.bind(this);
  }

  changeOrigin(origin) {
    var championsWithOrigin = this.props.champData
      .filter(champData => {
        let origins = champData.origin.find(
          champOrigin => champOrigin === origin
        );
        return !!origins;
      })
      .map(champData => champData.key);

    this.setState({
      showedChampsWithOrigin: championsWithOrigin,
      selectedOrigin: origin
    });
  }

  changeClass(classs) {
    var championsWithClass = this.props.champData
      .filter(champData => {
        let classes = champData.class.find(champClass => champClass === classs);
        return !!classes;
      })
      .map(champData => champData.key);

    this.setState({
      showedChampsWithClass: championsWithClass,
      selectedClass: classs
    });
  }

  addChamp(value) {
    var newChamp = this.state.myChamps.slice(0);
    if (newChamp.includes(value)) {
      return null;
    } else {
      newChamp.push(value);
      this.setState({
        myChamps: newChamp
      });
    }
  }
  removeChamp(value) {
    console.log("Removed clicked w/value: " + value);
    var newChamp = this.state.myChamps.slice(0);
    for (var i = 0; i < newChamp.length; i++) {
      if (newChamp[i] === value) {
        newChamp.splice(i, 1);
      }
    }
    this.setState({
      myChamps: newChamp
    });
  }

  render() {
    return (
      <div className="teambuilderContainer">
        <ChampSelect
          champData={this.props.champData}
          originData={this.props.originData}
          classData={this.props.classData}
          showedChampsWithOrigin={this.state.showedChampsWithOrigin}
          showedChampsWithClass={this.state.showedChampsWithClass}
          selectedClass={this.state.selectedClass}
          selectedOrigin={this.state.selectedOrigin}
          addChamp={this.addChamp}
          changeOrigin={this.changeOrigin}
          changeClass={this.changeClass}
        />
        <MyTeam
          myChamps={this.state.myChamps}
          champData={this.props.champData}
          originData={this.props.originData}
          classData={this.props.classData}
          removeChamp={this.removeChamp}
        />
      </div>
    );
  }
}

export default Teambuilder;
