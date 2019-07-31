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
      championData: null,
      itemData: null,
      originData: null,
      classData: null,
      tierListData: null,
      spriteURL: "https://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/",
      sortedBy: "name"
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
    const championData = require("./champions.json");
    var championObject = Object.keys(championData).map(
      key => championData[key]
    );
    this.setState({
      championData: championObject
    });

    const itemData = require("./items.json");
    var itemObject = Object.keys(itemData).map(key => itemData[key]);
    this.setState({
      itemData: itemObject
    });

    const originData = require("./origins.json");
    var originObject = Object.keys(originData).map(key => originData[key]);
    this.setState({
      originData: originObject
    });
    const classData = require("./classes.json");
    var classObject = Object.keys(classData).map(key => classData[key]);
    this.setState({
      classData: classObject
    });
    const tierListData = require("./tierlist.json");
    this.setState({
      tierListData: tierListData
    });
  }

  renderChampions() {
    var championCards = [];
    if (this.state.championData != null) {
      for (var i = 0; i < this.state.championData.length; i++) {
        championCards.push(
          <Champion
            imgURL={this.state.spriteURL}
            data={this.state.championData[i]}
            classname={`championCard ${i % 2 === 0 ? "" : "highlight"}`}
          />
        );
      }
    }
    return <div className="allChampContainer">{championCards}</div>;
  }

  renderItems() {
    var itemCards = [];
    if (this.state.itemData != null) {
      for (var i = 0; i < 8; i++) {
        itemCards.push(
          <Item data={this.state.itemData[i]} fullData={this.state.itemData} />
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
    var newData = this.state.championData.sort(function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    });
    if (this.state.sortedBy != "name") {
      this.setState({
        championData: newData,
        sortedBy: "name"
      });
    } else {
      this.setState({
        championData: newData.reverse(),
        sortedBy: "nameReversed"
      });
    }
  }
  sortByCost() {
    var newData = this.state.championData.sort(function compare(a, b) {
      if (a.cost < b.cost) {
        return -1;
      }
      if (a.cost > b.cost) {
        return 1;
      }
    });
    if (this.state.sortedBy != "cost") {
      this.setState({
        championData: newData,
        sortedBy: "cost"
      });
    } else {
      this.setState({
        championData: newData.reverse(),
        sortedBy: "costReversed"
      });
    }
  }
  sortByHealth() {
    var newData = this.state.championData.sort(function compare(a, b) {
      if (a.stats.defense.health < b.stats.defense.health) {
        return -1;
      }
      if (a.stats.defense.health > b.stats.defense.health) {
        return 1;
      }
    });
    if (this.state.sortedBy != "health") {
      this.setState({
        championData: newData.reverse(),
        sortedBy: "health"
      });
    } else {
      this.setState({
        championData: newData,
        sortedBy: "healthReversed"
      });
    }
  }
  sortByClass() {
    var newData = this.state.championData.sort(function compare(a, b) {
      if (a.class[0] < b.class[0]) {
        return -1;
      }
      if (a.class[0] > b.class[0]) {
        return 1;
      }
    });
    if (this.state.sortedBy != "class") {
      this.setState({
        championData: newData,
        sortedBy: "class"
      });
    } else {
      this.setState({
        championData: newData.reverse(),
        sortedBy: "classReversed"
      });
    }
  }
  sortByOrigin() {
    var newData = this.state.championData.sort(function compare(a, b) {
      if (a.origin[0] < b.origin[0]) {
        return -1;
      }
      if (a.origin[0] > b.origin[0]) {
        return 1;
      }
    });
    if (this.state.sortedBy != "origin") {
      this.setState({
        championData: newData,
        sortedBy: "origin"
      });
    } else {
      this.setState({
        championData: newData.reverse(),
        sortedBy: "originReversed"
      });
    }
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
          <div className="flexIt">
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
            <span className="infoSpan">
              I recommend{" "}
              <span
                onClick={this.sortByCost}
                className="highlightedText pointer"
              >
                sorting by cost
              </span>
              , before entering the teambuilder!
            </span>
          </div>
        ) : this.state.displayedContent === "items" ? (
          <div className="displayItemContainer">{this.renderItems()}</div>
        ) : this.state.displayedContent === "teambuilder" ? (
          <Teambuilder
            champData={this.state.championData}
            originData={this.state.originData}
            classData={this.state.classData}
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
