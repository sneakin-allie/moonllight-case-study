import React from "react";
import Mark from "./components/Mark";
import theme from './components/Theme';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import ProjectGoals from "./components/ProjectGoals";
import Discovery from "./components/Discovery";
import Design from "./components/Design";
import Develop from "./components/Develop";
import Results from "./components/Results";
import ProjectGoalsImages from "./components/ProjectGoalsImages";
import DiscoveryImages from "./components/DiscoveryImages";
import DesignImages from "./components/DesignImages";
import QuickHits from "./components/QuickHits";
import Ayana from "./components/Ayana";
import Premise from "./components/Premise";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import Testimonial from "./components/Testimonial";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Header />
        <HeroImage />
        <Premise />
        <Ayana />
        <QuickHits />
        <ProjectGoals />
          <ProjectGoalsImages />
        <Discovery />
          <DiscoveryImages />
        <Design />
          <DesignImages />
        <Develop />
        <Mark />
        <Results />
        <Testimonial />
        <Explore />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
