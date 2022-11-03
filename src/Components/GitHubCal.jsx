
import React from 'react'
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from 'react-tooltip';
import { Box, Center, Heading } from '@chakra-ui/react'
const GitHubCal = () => {
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
        <Box mt={'3rem'}>
            <Center> <Heading fontSize="3rem" textDecoration="underline" color={'#c084f5'} mt="1rem" mb="2rem">GitHub Stats</Heading></Center>
            <GitHubCalendar
                username="vivekkhade23"
                transformData={selectLastHalfYear} 
                blockSize={20}
                blockMargin={5}
                color="#c084f5"
                fontSize={15}
                m={40}
                // w='70%'
                style={{ margin: "auto", alignItems: "center" }}
            >
                        <ReactTooltip delayShow={10} html/>
                </GitHubCalendar>

        </Box>
    )
}

export default GitHubCal