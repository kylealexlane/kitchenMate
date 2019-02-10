import React from "react";
import styled, { withTheme } from "styled-components";
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
      <React.Fragment>
        <Board />
      </React.Fragment>
    );
  }
}

export default withTheme(Home);
