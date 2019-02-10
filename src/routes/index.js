import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import styled, { withTheme } from "styled-components";
import { history } from "../store";

import { HomeContainer } from "../containers";

const Container = styled.div`
  text-align: left;
`;

function Routes() {
  return (
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Container>
          <Route exact path={"/"} component={HomeContainer} />
        </Container>
      </React.Fragment>
    </ConnectedRouter>
  );
}

export default withTheme(Routes);
