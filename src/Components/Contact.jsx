import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
    Link,
    Tooltip,
    useClipboard,
    useToast,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsPerson, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_tc5ip3g",
                "template_9q6hdzh",
                form.current,
                "P8P2sET96Wz1os3bD"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        toast({
            title: "Email Sent",
            description: "We've sent your message to Vivek",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
    };

    const { hasCopied, onCopy } = useClipboard("+91-9552039288");
    const toast = useToast();
    return (
        <Container id="contact" maxW="full" mt={0} centerContent overflow="hidden">
            <Heading
                mt="2rem"
                textDecoration="underline"
                color={"#c770f0"}
                fontSize="3rem"
            >
                Contact Me
            </Heading>
            <Flex>
                <Box
                    bg={useColorModeValue("gray.700", "gray.700")}
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 4, md: 4, lg: 14 }}
                >
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Text
                                        mt={{ sm: 3, md: 3, lg: 5 }}
                                        color="gray.100"
                                        fontSize={"1rem"}
                                        fontWeight="bold"
                                    >
                                        Fill up the form below to contact
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={1} spacing={5} alignItems="flex-start">
                                            <Tooltip
                                                label={hasCopied ? "Number Copied!" : "Copy Number"}
                                                closeOnClick={false}
                                                hasArrow
                                            >
                                                <Button
                                                    size="lg"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    // color="#DCE2FF"
                                                    _hover={{ border: "2px solid #c770f0" }}
                                                    leftIcon={<MdPhone color="#c770f0" size="20px" />}
                                                    onClick={onCopy}
                                                >
                                                    +91-9552039288
                                                </Button>
                                            </Tooltip>
                                            <Link href="mailto:khadev881@gmail.com">
                                                <Button
                                                    size="lg"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: "2px solid #c770f0" }}
                                                    leftIcon={<MdEmail color="#c770f0" size="20px" />}
                                                >
                                                    Get In Touch
                                                </Button>
                                            </Link>
                                            <Link
                                                href="https://www.google.com/maps/place/Nagpur,+Maharashtra/@21.1610282,78.9324222,11z/data=!3m1!4b1!4m5!3m4!1s0x3bd4c0a5a31faf13:0x19b37d06d0bb3e2b!8m2!3d21.1458004!4d79.0881546"
                                                target="_blank"
                                            >
                                                <Button
                                                    size="lg"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: "2px solid #c770f0" }}
                                                    leftIcon={
                                                        <MdLocationOn color="#c770f0" size="20px" />
                                                    }
                                                >
                                                    Nagpur,Maharastra
                                                </Button>
                                            </Link>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start"
                                    >
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
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <form ref={form} onSubmit={sendEmail}>
                                            <VStack spacing={5}>
                                                <FormControl id="name" isRequired>
                                                    <FormLabel>Your Name</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<BsPerson color="gray.800" />}
                                                        />
                                                        <Input
                                                            type="text"
                                                            name="user_name"
                                                            placeholder="Your Name"
                                                            size="md"
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name" isRequired>
                                                    <FormLabel>Mail</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<MdOutlineEmail color="gray.800" />}
                                                        />
                                                        <Input
                                                            type="email"
                                                            name="user_email"
                                                            placeholder="Your Email"
                                                            size="md"
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name" isRequired>
                                                    <FormLabel>Message</FormLabel>
                                                    <Textarea
                                                        borderColor="gray.300"
                                                        _hover={{
                                                            borderRadius: "gray.300",
                                                        }}
                                                        name="message"
                                                        placeholder="Your Message"
                                                        rows={6}
                                                        resize="none"
                                                    />
                                                </FormControl>
                                                <FormControl id="name" float="right">
                                                    <Button
                                                        variant="solid"
                                                        bg="#c770f0"
                                                        color="white"
                                                        onClick={sendEmail}
                                                        _hover={{
                                                            bg: "#6dcff6",
                                                            color: useColorModeValue("white"),
                                                        }}
                                                    >
                                                        Send Message
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </form>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}
