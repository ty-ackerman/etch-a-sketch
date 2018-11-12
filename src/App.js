import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TestComponent from "./components/TestComponent";

class App extends Component {
  state = {
    width: 2,
    height: 2
  };

  componentDidMount() {
    axios
      .get("/healthcheck")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("error");
      });
  }
  renderGrid = (width, height) => {
    const rows = [];
    for (let x = 0; x !== width; x++) {
      rows.push(<TestComponent x={x} key={x} />);
    }
    return rows;
  };
  render() {
    const { width, height } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {this.renderGrid(width).map(index => index)}
        </header>
      </div>
    );
  }
}

export default App;
