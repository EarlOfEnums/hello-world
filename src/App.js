import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToDo from "./containers/ToDo";
import ToDoList from "./containers/ToDoList";
import styled, { ThemeProvider, withTheme } from "styled-components";

const theme = {
  base: "#262a41",
  paper: "#303552",
  font: "white"
};

const themeDuo = {
  base: "#f6f7f7",
  paper: "#f0f0f2",
  font: "#363636"
};

function App() {
  const [currentTheme, setCurrentTheme] = useState(theme);
  return (
    <ThemeProvider theme={currentTheme}>
      <Canvas>
        <Router>
          <Switch>
            <Route exact path="/" component={ToDoList} />
            <Route exact path="/todo/:id" component={ToDo} />
            {/* <Route
              exact
              path="/settings"
              render={<Settings onChange={setCurrentTheme} />}
            /> */}
          </Switch>
        </Router>
      </Canvas>
    </ThemeProvider>
  );
}

export default App;

const Canvas = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${p => p.theme.base};
  color: ${p => p.theme.font};
`;
