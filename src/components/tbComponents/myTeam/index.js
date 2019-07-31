import React, { Component } from "react";
import "./style.css";
import MySynergies from "../mySynergies";
import { FORMERR } from "dns";

class MyTeam extends Component {
  constructor(props) {
    super(props);

    this.renderMyTeam = this.renderMyTeam.bind(this);
    this.renderMySynergies = this.renderMySynergies.bind(this);
    this.checkSynergyEffect = this.checkSynergyEffect.bind(this);
  }

  renderMyTeam() {
    console.log(this.props.myChamps);
    const imgURL =
      "https://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/";
    return this.props.myChamps.map(champion => {
      let info = this.props.champData.find(data => data.key === champion);
      return (
        <div
          className="myTeamChamp"
          onClick={() => this.props.removeChamp(info.key)}
        >
          <img
            src={imgURL + info.key + ".png"}
            className="champSprite"
            alt=""
          />
        </div>
      );
    });
  }

  checkSynergyEffect(synergyName, count, synergyArray) {
    let synergy = synergyArray.find(origin => origin.name === synergyName);
    let reversedBonuses = synergy.bonuses.sort((a, b) =>
      a.needed > b.needed ? -1 : 1
    );
    for (let i = 0; i < synergy.bonuses.length; i++) {
      if (count >= reversedBonuses[i].needed) {
        return {
          count: count,
          description: synergy.description,
          synergy: reversedBonuses[i],
          hasBonus: true
        };
      }
    }
    return {
      count: count,
      description: synergy.description,
      synergy: null,
      hasBonus: false
    };
  }

  renderMySynergies() {
    const mySynergiesObject = this.props.myChamps.reduce((prev, curr) => {
      let info = this.props.champData.find(data => data.key === curr);
      for (let i = 0; i < info.origin.length; i++) {
        if (prev.hasOwnProperty(info.origin[i])) {
          prev[info.origin[i]] = this.checkSynergyEffect(
            info.origin[i],
            prev[info.origin[i]].count + 1,
            this.props.originData
          );
        } else {
          prev[info.origin[i]] = this.checkSynergyEffect(
            info.origin[i],
            1,
            this.props.originData
          );
        }
      }
      for (let i = 0; i < info.class.length; i++) {
        if (prev.hasOwnProperty(info.class[i])) {
          prev[info.class[i]] = this.checkSynergyEffect(
            info.class[i],
            prev[info.class[i]].count + 1,
            this.props.classData
          );
        } else {
          prev[info.class[i]] = this.checkSynergyEffect(
            info.class[i],
            1,
            this.props.classData
          );
        }
      }
      return prev;
    }, {});
    console.log(mySynergiesObject);
    return (
      <MySynergies
        mySynergies={mySynergiesObject}
        originData={this.props.originData}
        classData={this.props.classData}
      />
    );
  }

  render() {
    return (
      <div className="teamContainer">
        <div className="titleDiv">
          <span className="myTeamTitle">Your team</span>
        </div>

        <div className="teamAndSynergies">
          <div className="myTeam">{this.renderMyTeam()}</div>
          <div className="mySynergies">{this.renderMySynergies()}</div>
        </div>
      </div>
    );
  }
}

export default MyTeam;
