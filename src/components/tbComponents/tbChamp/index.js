import React, { Component } from "react";

class TbChamp extends Component {
  render() {
    return (
      <div onClick={() => this.props.addChamp(this.props.name)}>
        {this.props.name}
      </div>
    );
  }
}

export default TbChamp;
