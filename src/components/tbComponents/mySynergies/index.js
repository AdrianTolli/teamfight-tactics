import React, { Component } from "react";
import "./style.css";

class MySynergies extends Component {
  render() {
    return (
      <div className="synergyContainer">
        <div className="synergyBonuses">
          {Object.keys(this.props.mySynergies).map(key => {
            if (this.props.mySynergies[key].hasBonus) {
              console.log(this.props.mySynergies[key]);
              return (
                <div className="effect">
                  <div className="effectTitle">{key}:</div>
                  <div className="effectDescription">
                    {this.props.mySynergies[key].description}
                    <div>
                      {this.props.mySynergies[key].count}:{" "}
                      {this.props.mySynergies[key].synergy.effect}
                    </div>
                  </div>
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
