import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters NFT</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;

// import "./App.css";
//
// import { useEffect, useState } from "react";
//
// import { CardList } from "./components/card-list/card-list.component";
//
// function App() {
//   const [monsters, setMonsters] = useState([]);
//   const [searchField, setSearchField] = [""]
//
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => setMonsters(users));
//   }, []);
//
//   return (
//     <div className="App">
//       <input type="search" placeholder="search monsters" />
//       <CardList monsters={monsters}></CardList>
//     </div>
//   );
// }
// export default App;
