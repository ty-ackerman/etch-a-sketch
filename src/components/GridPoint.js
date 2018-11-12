import React from "react";

class GridPoint extends React.Component {
  state = {
    active: false
  };

  componentDidMount() {
    if (
      this.props.x === this.props.cursor.x &&
      this.props.y === this.props.cursor.y
    ) {
      this.setState({
        active: true
      });
    }
  }

  render() {
    return this.state.active ? (
      <div className="active grid-point" />
    ) : (
      <div className="inactive grid-point" />
    );
  }
}

export default GridPoint;
