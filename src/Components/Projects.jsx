import React from "react";

import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";
import Toggl from "../Images/Projects/toggl.png";
import myglamm from "../Images/Projects/myglamm.png";
import yoox from "../Images/Projects/Yoox.png";
import kimaye from "../Images/Projects/kimaye.png"

const Project = () => {
  const ProjectData = [
    {
      title: "Toggl Track ",
      link: "https://toggletrack-ten.vercel.app/",
      url: "https://github.com/vivekkhade23/Toggl-Track-Clone/tree/main/toggletrack",
      description:
        "Toggl Track is a time tracking software operated by Toggl OÜ, that offers online time tracking and reporting services through their website along with mobile and desktop applications. Toggl Track tracks time blocks, optionally labeled with a task, a project, and tags.",
      language:
        "  React js | Chakra UI | HTML | CSS | JavaScript  | Redux |Node js | Express js",
      image: Toggl,
    },
    {
      title: "MYGlamm Clone",
      link: "https://myglamm-clone-two.vercel.app",
      url: "https://github.com/vivekkhade23/future-channel-1001",
      description:"MyGlamm is a direct-to-consumer beauty brand that offers a marketplace for stylists, beauticians, nail, and spa aestheticians.",
      language: " React js | Chakra UI | CSS",
      image: myglamm,
    },
    {
      title: "Kimaye Clone",
      link: "https://glistening-banoffee-6aa66c.netlify.app/",
      url: "https://github.com/vivekkhade23/kimaye",
      description:
        "Kimaye is Hassle free online fruit ordering platform in Mumbai, Kimaye is a promise of consistently delivering the safest and superior quality fruits.",
      language: " HTML | CSS | JavaScript | LocalStorage",
      image: kimaye,
    },

    {
      title: "Yoox Clone",
      link: "https://dapper-sable-604b5f.netlify.app/layouts/home-women",
      url: "https://github.com/pragati-tripathi05/Unit-3-Group-Project-yoox.com-/tree/master/%23Unit%203-%20Group%20Project%20(yoox.com)",
      description:
        "Yoox is an Italian e-commerce company that has successfully created an online fashion store and business that serves more than 100 countries all over the world.",
      language:
        " HTML | CSS | JavaScript  | API",
      image: yoox,
    },
  ];
  return (
    <Box mt={20} id="projects" p={"0.5rem"}>
      <Center>
        {" "}
        <Heading fontSize="3rem" color={"#c770f0"} textDecoration="underline">
          My Projects
        </Heading>
      </Center>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={8} mb="2rem">
        {ProjectData.map((t) => {
          return (
          
            <Stack
              style={{
                padding: "1rem",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
              }}
              justifyContent={"center"}
              alignItems={"center"}
              border="1px solid"
              borderColor={"gray.300"}
              rounded={"xl"}
              mx={8}
              p={2}
            >
              <Image src={t.image} mt="0" />
              <Text fontSize={"1.3rem"}>{t.title}</Text>
              <Text>{t.description}</Text>
              <Text>
                <b> Tech-Stack :</b> {t.language}{" "}
              </Text>

              <Flex justifyContent={"space-between"} gap={[4]}>
                <Button
                  target="_blank"
                  as="a"
                  href={t.url}
                  bg={"#c770f0"}
                  color="white"
                  _hover={{ bg: "#6dcff6" }}
                >
                  Github
                </Button>
                <Button
                  as="a"
                  href={t.link}
                  target="_blank"
                  bg={"#c770f0"}
                  color="white"
                  _hover={{ bg: "#6dcff6" }}
                >
                  Deployment
                </Button>
              </Flex>
            </Stack>

          );
        })}

      </SimpleGrid>
    </Box>
  );
};

export default Project;
