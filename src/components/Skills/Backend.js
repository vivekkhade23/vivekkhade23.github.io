import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DiMongodb, DiNodejs } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'

function Backend() {
  return (
    <div>

        
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>  
<Col xs={4} md={2} className="skills">
       <DiMongodb />
     </Col>
     <Col xs={4} md={2} className="skills">
       <DiNodejs />
     </Col>
     <Col xs={4} md={2} className="skills">
       <SiExpress/>
     </Col>
   </Row>

    </div>
  )
}

export default Backend