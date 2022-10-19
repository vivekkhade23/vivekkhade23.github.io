
import { Spacer } from "@chakra-ui/react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from 'react-tooltip';



function Github() {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 11;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Row style={{ justifyContent: "center", paddingBottom: "10px",marginBottom:"50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="vivekkhade23"
        transformData={selectLastHalfYear} 
        hideTotalCount 
        hideColorLegend
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      >
        <ReactTooltip delayShow={10} html/>
        </GitHubCalendar>
</Row>
<Spacer/>
<br/>
<div>
      <div style={{ width: "40%", margin: "auto" }}>
        <a href="https://github.com/vivekkhade23">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=vivekkhade23"
          />
        </a>
      </div>
 
      <div
        style={{
          width: "60%",
          height: "300px",
          display: "flex",
      
          margin: "auto",
          flexDirection:"column"
        }}
      >
        <a href="https://github.com/vivekkhade23">  
          <img
            // align="center"
            color="#c084f5"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=vivekkhade23"  //launguages
          />
        </a>
        <a href="https://github.com/vivekkhade23">
          <img
            // align="left"
            color="#c084f5"
            src="https://github-readme-stats.vercel.app/api?username=vivekkhade23&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
<br/>
<Row style={{ justifyContent: "center", paddingBottom: "50px" ,marginTop:"155px" }}>
      
      <Col  className="skills">
        1200+hrs  
        <b className="purple"> Coding  </b>    </Col>
           
      <Col className="skills">100+hrs 
      <b className="purple">   softSkills  </b> </Col>

      <Col className="skills">10+
      <b className="purple">  Mini   </b> and 
      <b className="purple">  Major   </b>                
      Projects
      </Col>

      </Row>
    </Row>
  );
}


export default Github;
