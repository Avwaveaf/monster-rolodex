import React, { Component } from "react";
import { CardList } from "./components/CardList/Card-List.component";
import { SearchBar } from "./components/Search-Box/Search-Box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchBar: ""
    };
  }
  // component did mount will execute the code inside the curly brackets when
  // current component executed or rendered.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }
  changeHandler = (e) => {
    this.setState({ searchBar: e.target.value });
  };

  render() {
    const { monster, searchBar } = this.state;
    const filteredMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchBar.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBar
          placeholder='monster List'
          changeHandler={this.changeHandler}
        />
        <CardList monster={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
