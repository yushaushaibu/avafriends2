import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  state = {
    robots: [],
    searchfield: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => {
        this.setState({ robots: user });
      })
      .catch((err) => console.log(err));
  }

  searchChangeHandler = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (robots.length === 0) {
      return <h1 className="light-red">Loading..</h1>;
    } else {
      return (
        <div className="tc">
          <h1>AvafriendsII</h1>
          <SearchBox searchChange={this.searchChangeHandler} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
