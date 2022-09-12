import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiReplit,
  SiCodesandbox
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiReplit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodesandbox />
      </Col>
    </Row>
  );
}

export default Toolstack;
