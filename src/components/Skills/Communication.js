import React from 'react'
import leader from "../../Assets/communication/leadd.png"
import problemsolving from "../../Assets/communication/problemsolving.png"
import projectmanage from "../../Assets/communication/projectmanagement.png"
import creative from "../../Assets/communication/creativity.png";
import teamwork from "../../Assets/communication/teamwork.png"
import { Col, Row } from 'react-bootstrap';




function Communication() {
  return (
    <div>
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
     
     <Col xs={4} md={2} className="skills">
     <img src={leader} className="img-fluid" alt="avatar" />
     </Col>
     <Col xs={4} md={2} className="skills">
     <img src={creative} className="img-fluid" alt="avatar" />
     </Col>
     <Col xs={4} md={2} className="skills">
     <img src={problemsolving} className="img-fluid" alt="avatar" />
     </Col>
     <Col xs={4} md={2} className="skills">
     <img src={projectmanage} className="img-fluid" alt="avatar" />
     </Col>
     <Col xs={4} md={2} className="skills">
     <img src={teamwork} className="img-fluid" alt="avatar" />
     </Col>
   </Row>

    </div>
  )
}

export default Communication