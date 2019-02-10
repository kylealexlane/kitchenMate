import React from "react";
import { withTheme } from "styled-components";
import { Board } from "../Board";

class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  componentDidMount() {
      document.title = "KitchenMate Challenge";
  }

  render() {
    return (
        <Board />
    );
  }
}

export default withTheme(Home);
