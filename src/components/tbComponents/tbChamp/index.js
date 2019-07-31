import React, { Component } from "react";
import "./style.css";

class TbChamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: "https://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/"
    };
  }

  render() {
    return (
      <div
        className="pointer margin"
        onClick={() => this.props.addChamp(this.props.name)}
      >
        <img
          src={this.state.imgURL + this.props.name + ".png"}
          className="champSprite"
        />
      </div>
    );
  }
}

export default TbChamp;
