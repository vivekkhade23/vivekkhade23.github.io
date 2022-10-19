import { Spacer } from '@chakra-ui/react'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import Particle from '../Particle'

function Contact() {
  return (
    <div>
         <Container fluid className="about-section">
      <Particle />
      <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col className="skills">
      EmailId:-
     </Col> <Col  className="skills">
      Khadev881@gmail.com
     </Col>
</Row>
<Spacer/>
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col  className="skills">
      MObileNO:-
     </Col> <Col  className="skills">
      +919552039288
     </Col>
</Row>
<Spacer/>
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col  className="skills">
      LinkedIn:-
     </Col> <Col  className="skills">
     <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vivek-khade-02b655149/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
           
     </Col>
</Row>
<Spacer/>
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col  className="skills">
      GitHub:-
     </Col> <Col  className="skills">
     <li className="social-icons">
              <a
                href="https://github.com/vivekkhade23"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
           
     </Col>
</Row>
      </Container>
      </Container>
    </div>
  )
}

export default Contact