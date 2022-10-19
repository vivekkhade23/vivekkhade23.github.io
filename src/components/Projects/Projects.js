import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myglamm from "../../Assets/Projects/myglamm.png";
import kimaye from "../../Assets/Projects/kimaye.png";
import yoox from "../../Assets/Projects/Yoox.png";
import chatify from "../../Assets/Projects/chatify.png";
import apple from "../../Assets/Projects/apple.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
     
     
     
     
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Expedia Clone"
              description="Expedia Inc. is an online travel agency owned by Expedia Group, an American online travel shopping company based in Seattle.It is built using ReactJS,CSS,JavaScript"
              ghLink="https://github.com/vivekkhade23/gentle-kitty-597"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myglamm}
              isBlog={false}
              title="MYGlamm Clone"
              description="MyGlamm is a direct-to-consumer beauty brand that offers a marketplace for stylists, beauticians, nail, and spa aestheticians.I have cloned it using ReactJs,chakraUI,css and tried to make it as realistic as possible. "
              ghLink="https://github.com/vivekkhade23/future-channel-1001"
              
              demoLink="https://myglamm-clone-two.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kimaye}
              isBlog={false}
              title="Kimaye Clone"
              description="Kimaye is Hassle free online fruit ordering platform in Mumbai, Kimaye is a promise of consistently delivering the safest and superior quality fruits.It is build using Html,css,javaScript."
              ghLink="https://github.com/vivekkhade23/kimaye"
              demoLink="https://glistening-banoffee-6aa66c.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yoox}
              isBlog={false}
              title="Yoox Clone"
              description="Yoox is an Italian e-commerce company that has successfully created an online fashion store and business that serves more than 100 countries all over the world.Build using Html,css,javaScript.It is Group project."
              ghLink="https://github.com/pragati-tripathi05/Unit-3-Group-Project-yoox.com-/tree/master/%23Unit%203-%20Group%20Project%20(yoox.com)"
              demoLink="https://dapper-sable-604b5f.netlify.app/layouts/home-women"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title="Apple Clone"
              description="Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services.It's clone is build using Html and Css "
              ghLink="https://github.com/harshalpatil655/Apple-Clone-Masai"
             // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
