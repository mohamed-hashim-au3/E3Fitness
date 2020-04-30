import React from "react";

import Routes from "./routes";
import history from "./stores/history";
import { ConnectedRouter } from "connected-react-router";
function App() {
  return (
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  );
}

export default App;
