import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page: {props.match.params.hatId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/hats/:hatId" component={HatsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
