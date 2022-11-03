import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function SkillsMeter() {
    return (
        <Box align="center">
            <Heading
                fontSize="3rem"
                mb={"3rem"}
                textDecoration="underline"
                color={"#c770f0"}
                cursor="pointer"
            >
                Statistics
            </Heading>

            <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-1rem",
                }}
            >
                <Text align="center">
                    <Link href="https://github.com/vivekkhade23" target="_blank">
                        <Image
                            src="https://github-profile-trophy.vercel.app/?username=vivekkhade23"
                            alt="vivekkhade23"
                        />
                    </Link>
                </Text>
            </Box>
            <Text mt="-.2rem">
                <Image
                    align="center"
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=vivekkhade23&show_icons=true&locale=en&layout=compact"
                    alt="vivekkhade23"
                />
            </Text>

            <Box
                style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                }}
            >
                <div style={{ marginBottom: "1.5rem" }}>
                    <p>
                        &nbsp;
                        <img
                            align="center"
                            src="https://github-readme-stats.vercel.app/api?username=vivekkhade23&show_icons=true&locale=en"
                            alt="vivekkhade23"
                        />
                    </p>
                </div>

                <div>
                    <p>
                        <img
                            align="center"
                            src="https://github-readme-streak-stats.herokuapp.com/?user=vivekkhade23&"
                            alt="vivekkhade23"
                        />
                    </p>
                </div>
            </Box>
        </Box>
    );
}
