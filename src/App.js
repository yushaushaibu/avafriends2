import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css'

class App extends Component {
  state = {
    robots: [],
    searchfield: "",
  };

  componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user => {
        this.setState({ robots: user })
      })
      .catch(err => console.log(err))
  }

  searchChangeHandler = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    
    if (this.state.robots.length === 0) {
      return <h1 className="light-red">Loading..</h1>
    } else {
      return (
        <div className="tc">
          <h1>AvafriendsII</h1>
          <SearchBox searchChange={this.searchChangeHandler} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
