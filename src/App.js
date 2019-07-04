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
    this.sortByName = this.sortByName.bind(this);
    this.sortByCost = this.sortByCost.bind(this);
    this.sortByHealth = this.sortByHealth.bind(this);
    this.sortByClass = this.sortByClass.bind(this);
    this.sortByOrigin = this.sortByOrigin.bind(this);
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

  sortByName() {
    var newData = this.state.champData.champions.sort(function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    });
    this.setState({
      champData: {
        champions: newData,
        spriteURL: this.state.champData.spriteURL
      }
    });
  }
  sortByCost() {
    var newData = this.state.champData.champions.sort(function compare(a, b) {
      if (a.cost < b.cost) {
        return -1;
      }
      if (a.cost > b.cost) {
        return 1;
      }
    });
    this.setState({
      champData: {
        champions: newData,
        spriteURL: this.state.champData.spriteURL
      }
    });
  }
  sortByHealth() {
    var newData = this.state.champData.champions.sort(function compare(a, b) {
      if (a.health < b.health) {
        return -1;
      }
      if (a.health > b.health) {
        return 1;
      }
    });
    this.setState({
      champData: {
        champions: newData.reverse(),
        spriteURL: this.state.champData.spriteURL
      }
    });
  }
  sortByClass() {
    var newData = this.state.champData.champions.sort(function compare(a, b) {
      if (a.classes[0] < b.classes[0]) {
        return -1;
      }
      if (a.classes[0] > b.classes[0]) {
        return 1;
      }
    });
    this.setState({
      champData: {
        champions: newData,
        spriteURL: this.state.champData.spriteURL
      }
    });
  }
  sortByOrigin() {
    var newData = this.state.champData.champions.sort(function compare(a, b) {
      if (a.classes[1] < b.classes[1]) {
        return -1;
      }
      if (a.classes.length === 3) {
        if (a.classes[2] > b.classes[2]) {
          return 1;
        }
      } else if (a.classes[1] > b.classes[1]) {
        return 1;
      }
    });
    this.setState({
      champData: {
        champions: newData,
        spriteURL: this.state.champData.spriteURL
      }
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
        {this.state.displayedContent === "champions" ? (
          <span>
            Unfortunatly sort by Origin does not work as intended, due to 2
            classes on some champions
          </span>
        ) : null}
        {this.state.displayedContent === "champions" ? (
          <div className="displayChampContainer">
            <ContentHeader
              sortByName={this.sortByName}
              sortByCost={this.sortByCost}
              sortByHealth={this.sortByHealth}
              sortByClass={this.sortByClass}
              sortByOrigin={this.sortByOrigin}
            />
            {this.renderChampions()}
          </div>
        ) : this.state.displayedContent === "items" ? (
          <div className="displayItemContainer">{this.renderItems()}</div>
        ) : this.state.displayedContent === "teambuilder" ? (
          <Teambuilder
            champData={this.state.champData}
            synergyData={this.state.synergyData}
          />
        ) : (
          <span>
            Click on either champions to see pieces available, items to see all
            items and their combinations, or try out the teambuilder!
          </span>
        )}
      </div>
    );
  }
}

export default App;
