import React, { Component } from "react";

class OldReactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      age: 23,
      name: "Denis",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Algo à faire quand le composant se monte
  }

  handleClick() {
    // Algo
  }

  render() {
    return <div></div>;
  }
}

export default OldReactComponent;
