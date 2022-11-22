import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
} from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";
import avatar from "../Images/avatar.png";
import "../App.css";

export default function About() {
    return (
        <Container maxW={"7xl"} id="about">
            <Stack
                mt={-10}
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: "column", md: "row" }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading lineHeight={1.1} fontSize="3rem">
                        <br />
                        <Text as={"span"} textDecoration="underline" color={"#c770f0"}>
                            About Me
                        </Text>
                    </Heading>
                    <Text color={"gray.600"} fontSize={"1.3rem"}>
                    <h1 style={{ fontSize: "2.0em" }}>
            <span> INTRODUCTION </span> 
            </h1>   
                     <b style={{color:"#c770f0"}}>  A Full Stack Web Developer </b>with 
                     the ability to learn and collaborate in rapidly changing in environments and compositions. Worked through
                     <b style={{color:"#c770f0"}}>1200+  hrs </b>of military  style training learning 
                      <b style={{color:"#c770f0"}}> <i> Javascript, HTML5, CSS3, ReactJs, MongoDB, NodeJS, ExpressJS</i> </b>.
                       Interested in building new 
              <i>
                <b style={{color:"#c770f0"}}> programming Launguages projects and React </b> and
                also in areas related to{" "}
                <b style={{color:"#c770f0"}}>
                React such as Redux.
                </b>
                </i>
              <br />

              
                    </Text>
                </Stack>

                <Flex
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    position={"relative"}
                    w={"full"}
                >
                   
                    <Box position={"relative"} classname="aboutimage" marginLeft={"-200px"} height={"300px"} width={"full"}>
                    <Tilt>
                        <Image
                            className="zoom"
                            alt={"Hero Image"}
                            fit={"cover"}
                            cursor="pointer"
                            align={"center"}
                            mt={5}
                            ml={40}
                            src={avatar}
                        />
                        </Tilt>
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}


