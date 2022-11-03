import { DownloadIcon } from "@chakra-ui/icons";
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    IconButton,
    Link,
    useToast,
    useColorModeValue,
    HStack,
} from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";
import home from "../Images/home.png"
import resume from "../Vivek-khade-Resume.pdf";

import "../App.css";

import Time from "./Time";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
export default function Home() {
    const toast = useToast();
    return (
        <Container maxW={"7xl"} fontFamily="sans-serif" borderRadius="lg" p={8}>
            <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 20 }}
                direction={{ base: "column", md: "row" }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.2}
                        fontWeight={700}
                        fontSize={{ base: "4xl", sm: "5xl", lg: "4xl" }}
                    >
                        <Text>Hey I'm Vivek,</Text>

                        <Text as={"span"} color={"#c770f0"}>
                            <Time />
                        </Text>
                    </Heading>
                    <Stack
                        spacing={{ base: 5, md: 5 }}
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Link
                            href={resume}
                            download
                            style={{ color: "inherit", textDecoration: "inherit" }}
                        >
                            <Stack
                                spacing={{ base: 5, md: 5 }}
                                direction={{ base: "column", sm: "row" }}
                            >
                                <Button
                                    rightIcon={<DownloadIcon />}
                                    size={"md"}
                                    fontWeight={"bold"}
                                    px={10}
                                    // fontSize="1.3rem"
                                    color="white"
                                    colorScheme={"#0c0513"}
                                    bg={"#c770f0"}
                                    _hover={{ bg: "#6dcff6", color: "white" }}
                                    onClick={() =>
                                        toast({
                                            title: "resume downloaded",
                                            status: "success",
                                            duration: 10000,
                                            isClosable: true,
                                        })
                                    }
                                >
                                    Resume
                                </Button>
                                <Box>
                                    <HStack spacing={5} px={5} alignItems="flex-start">
                                        <Link
                                            href="https://twitter.com/Vivek230698"
                                            target="_blank"
                                        >
                                            <IconButton
                                                aria-label="twitter"
                                                variant="ghost"
                                                size="lg"
                                                icon={<BsTwitter size="28px" />}
                                                _hover={{
                                                    bg: "#6dcff6",
                                                    color: useColorModeValue("white", "gray.700"),
                                                }}
                                                isRound
                                            />
                                        </Link>
                                        <Link href="https://github.com/vivekkhade23" target="_blank">
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                fontSize="3xl"
                                                icon={<BsGithub />}
                                                _hover={{
                                                    bg: "gray.500",
                                                    color: useColorModeValue("white", "gray.700"),
                                                }}
                                                isRound
                                            />
                                        </Link>
                                        <Link
                                            href="https://www.linkedin.com/in/vivek-khade-02b655149/"
                                            target="_blank"
                                        >
                                            <IconButton
                                                aria-label="linkedin"
                                                variant="ghost"
                                                size="lg"
                                                icon={<BsLinkedin size="28px" />}
                                                _hover={{
                                                    bg: "#007aff",
                                                    color: useColorModeValue("white", "gray.700"),
                                                }}
                                                isRound
                                            />
                                        </Link>
                                    </HStack>
                                </Box>
                            </Stack>
                        </Link>
                    </Stack>
                </Stack>

                <Flex
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    position={"relative"}
                    w={"full"}
                >
                    <Box
                    className="homebox"
                        position={"relative"}
                        height={"400px"}
                        rounded={"2xl"}
                        boxShadow={"2xl"}
                        width={"full"}
                        alignItems={"center"}
                        overflow={"hidden"}

                    >
                        <IconButton
                            aria-label={"Play Button"}
                            variant={"ghost"}
                            _hover={{ bg: "transparent" }}
                            // icon={<PlayIcon w={12} h={12} />}
                            size={"lg"}
                            color={"white"}
                            position={"absolute"}
                            left={"50%"}
                            top={"50%"}
                            transform={"translateX(-50%) translateY(-50%)"}
                        />
                        <Tilt>
                        <Image
                            alt={"Hero Image"}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={"100%"}
                            src={home}
                        />
                        </Tilt>
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}
