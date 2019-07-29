import React, { Component } from "react";
import "./style.css";

class MySynergies extends Component {
  render() {
    return (
      <div className="synergyContainer">
        <div className="synergyCount">
          {Object.keys(this.props.mySynergies).map(key => {
            return (
              <div>
                {key} {this.props.mySynergies[key].count}
              </div>
            );
          })}
        </div>
        <div className="synergyBonuses">
          {Object.keys(this.props.mySynergies).map(key => {
            if (this.props.mySynergies[key].hasBonus) {
              return (
                <div>
                  {key}: {this.props.mySynergies[key].synergy.effect}{" "}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default MySynergies;
