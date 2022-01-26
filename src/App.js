import React from "react";
import { ThemeProvider } from "styled-components";
import theme from './components/Theme';
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Premise from "./components/Premise";
import QuickHits from "./components/QuickHits";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Header />
        <Premise />
        <QuickHits />
    </ThemeProvider>
  );
}

export default App;
