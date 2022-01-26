import React from "react";
import { ThemeProvider } from "styled-components";
import theme from './components/Theme';
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello World</h1>
        </Container>
    </ThemeProvider>
  );
}

export default App;
