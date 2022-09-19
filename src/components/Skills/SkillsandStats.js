import React from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import Backend from "./Backend";
import Communication from "./Communication";
import FrontEnd from "./FrontEnd";
import Github from "./Github";

function Skills() {
  return (
    <div>
 <Container fluid className="about-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          <strong className="purple">Frontend</strong> Skills
        </h1>
<FrontEnd/>
<br/>
<h1 className="project-heading">
          <strong className="purple">Backend</strong> Skills
        </h1>
<Backend/>
<br/>
<h1 className="project-heading">
          <strong className="purple">Communication</strong> Skills
        </h1>
<Communication/>
<br/>
<Github/>
</Container>
</Container>
    </div>
  )
}

export default Skills