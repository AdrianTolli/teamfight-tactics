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
      .map(champData => champData.name);

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
      .map(champData => champData.name);

    this.setState({
      showedChampsWithClass: championsWithClass,
      selectedClass: classs
    });
  }

  addChamp(value) {
    var newChamp = this.state.myChamps.slice(0);
    newChamp.push(value);

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
        />
      </div>
    );
  }
}

export default Teambuilder;
