import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GridPoint from "./components/GridPoint";

class App extends Component {
  state = {
    width: 10,
    height: 10,
    cursor: {
      x: 4,
      y: 4
    }
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
    const points = [];
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        points.push(
          <GridPoint
            x={x}
            y={y}
            key={`${x}, ${y}`}
            cursor={this.state.cursor}
          />
        );
      }
    }
    return points;
  };
  render() {
    const { width, height } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="grid">
            {this.renderGrid(width, height).map(index => index)}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
