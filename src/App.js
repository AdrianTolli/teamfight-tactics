import React, { Component } from "react";
import Navbar from "./components/navbar";
import Champion from "./components/champion";
import Item from "./components/item";
import ContentHeader from "./components/contentHeader";
import Teambuilder from "./components/teambuilder";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayedContent: "champions",
      champData: null,
      itemData: null,
      synergyData: null
    };

    this.renderChampions = this.renderChampions.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.champClicked = this.champClicked.bind(this);
    this.itemClicked = this.itemClicked.bind(this);
    this.tbClicked = this.tbClicked.bind(this);
  }

  componentDidMount() {
    const champData = require("./pieces.json");
    this.setState({
      champData: champData
    });

    const itemData = require("./items.json");
    this.setState({
      itemData: itemData
    });

    const synergyData = require("./synergies.json");
    this.setState({
      synergyData: synergyData
    });
  }

  renderChampions() {
    var championCards = [];
    if (this.state.champData != null) {
      for (var i = 0; i < this.state.champData.champions.length; i++) {
        i % 2 === 0
          ? championCards.push(
              <Champion
                imgURL={this.state.champData.spriteURL}
                data={this.state.champData.champions[i]}
                classname="championCard"
              />
            )
          : championCards.push(
              <Champion
                imgURL={this.state.champData.spriteURL}
                data={this.state.champData.champions[i]}
                classname="championCard highlight"
              />
            );
      }
    }
    return <div className="allChampContainer">{championCards}</div>;
  }

  renderItems() {
    var itemCards = [];
    if (this.state.itemData != null) {
      for (var i = 0; i < this.state.itemData.items.length; i++) {
        itemCards.push(
          <Item
            data={this.state.itemData.items[i]}
            fullData={this.state.itemData}
          />
        );
      }
    }
    return <div className="allItemContainer">{itemCards}</div>;
  }

  champClicked() {
    this.setState({
      displayedContent: "champions"
    });
  }
  itemClicked() {
    this.setState({
      displayedContent: "items"
    });
  }
  tbClicked() {
    this.setState({
      displayedContent: "teambuilder"
    });
  }

  render() {
    return (
      <div className="height100 fullContainer">
        <Navbar
          champClicked={this.champClicked}
          itemClicked={this.itemClicked}
          tbClicked={this.tbClicked}
          displayedContent={this.state.displayedContent}
        />
        <div className="displayContainer">
          {this.state.displayedContent === "champions" ? (
            <ContentHeader />
          ) : null}
          {this.state.displayedContent === "champions" ? (
            this.renderChampions()
          ) : this.state.displayedContent === "items" ? (
            this.renderItems()
          ) : this.state.displayedContent === "teambuilder" ? (
            <Teambuilder
              champData={this.state.champData}
              synergyData={this.state.synergyData}
            />
          ) : (
            <span>
              Click on either champions to see pieces available, items to see
              all items and their combinations, or try out the teambuilder!
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default App;
