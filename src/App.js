import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Project from "./Components/Projects";
import Skills from "./Components/Skills";
import TechStack from "./Components/TechStack";
import SkillsMeter from "./Components/SkillsMeter";
import GitHubCal from "./Components/GitHubCal";
import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App" bg={useColorModeValue("gray.200")}>
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Skills />
      <Project />
      <SkillsMeter />
      <GitHubCal />
      <Contact />
    </Box>
  );
}

export default App;
