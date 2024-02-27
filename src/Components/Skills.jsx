import { Box, Center, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import vercel from "../Images/tech/vercel.png";
import heroku from "../Images/tech/heroku.png";

export default function Skills() {
    return (
        <Box
            maxW={"7xl"}
            fontFamily="sans-serif"
            margin={"auto"}
            id="skills"
            mt="5rem"
        >
            <Center>
                {" "}
                <Heading
                    fontSize="3rem"
                    color={"#c770f0"}
                    mb={"3rem"}
                    textDecoration="underline"
                >
                    Technical-Skills
                </Heading>{" "}
            </Center>
            <SimpleGrid minChildWidth="110px" spacing="60px" mt={"0.5rem"} ml="1rem">
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://i.pinimg.com/originals/a2/7d/14/a27d14a27b5ef7d35c241d5cc9c1deb4.png"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png"
                    />
                </Box>
                {/* <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src={boot}
                    />
                </Box> */}
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://miro.medium.com/max/1024/1*33CwBYkmnMfpA9Djup22Jw.png"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src={vercel}
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="data:image/png;base64,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"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="fit"
                        boxSize="130px"
                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/MySQL-Logo.wine.png"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="data:image/jpeg;base64,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"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="data:image/png;base64,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"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="fit"
                        boxSize="130px"
                   src='https://www.kaashivinfotech.com/blog/wp-content/uploads/2023/09/bitbucket9553.jpg'
/>
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://miro.medium.com/max/1200/1*BfTeu35aPGjLDfkj4zmYJQ.png"
                    />
                </Box>
                <Box height="80px">
                    <Image
                        style={{
                            padding: "0.4rem",
                            boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        objectFit="cover"
                        boxSize="130px"
                   src={heroku}
/>
                </Box>
            </SimpleGrid>
        </Box>
    );
}
