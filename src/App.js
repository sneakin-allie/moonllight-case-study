import React from "react";
import theme from './components/Theme';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import ProjectGoals from "./components/ProjectGoals";
import Discovery from "./components/Discovery";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <ProjectGoals />
        <Discovery />
    </ThemeProvider>
  );
}

export default App;
