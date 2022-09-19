
import { Spacer } from "@chakra-ui/react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import homeLogo from "../../Assets/home-main.svg";


function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="vivekkhade23"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
</Row>
<Spacer/>
<br/>

<br/>
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="skills">
        1200+hrs  
        <b className="purple"> Coding  </b>    </Col>
           
      <Col xs={4} md={2} className="skills">100+hrs 
      <b className="purple">   softSkills  </b> </Col>

      <Col xs={4} md={2} className="skills">10+
      <b className="purple">  Mini   </b> and 
      <b className="purple">  Major   </b>                
      Projects
      </Col>

      </Row>
    </Row>
  );
}


export default Github;
