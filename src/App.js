import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import './App.css'

class App extends Component {
  state = {
    robots: robots,
    searchfield: "",
  };

  searchChangeHandler = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>AvafriendsII</h1>
        <SearchBox searchChange={this.searchChangeHandler} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
