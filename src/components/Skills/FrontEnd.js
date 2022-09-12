import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DiCss3, DiGithubBadge, DiJavascript1, DiNpm, DiReact } from 'react-icons/di'
import { IoLogoHtml5 } from 'react-icons/io'

function FrontEnd() {
  return (
    <div>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
     <Col xs={4} md={2} className="skills">
       <IoLogoHtml5 />
     </Col>
     <Col xs={4} md={2} className="skills">
       <DiJavascript1 />
     </Col>
     <Col xs={4} md={2} className="skills">
      <DiNpm/>
     </Col>
     <Col xs={4} md={2} className="skills">
       <DiReact />
     </Col>
     <Col xs={4} md={2} className="skills">
       <DiGithubBadge />
     </Col>
     <Col xs={4} md={2} className="skills">
       <DiCss3 />
     </Col>
     
    
   </Row>
    </div>
  )
}

export default FrontEnd