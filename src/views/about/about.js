
import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  useColorMode,
  Icon,
  Button,
  Link,
  Skeleton,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdFlightTakeoff } from "react-icons/md";
import { LiaDrumSolid } from "react-icons/lia";
import { GiCricketBat } from "react-icons/gi";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import angular from "../../assets/icons/angular.svg";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import gitlab from "../../assets/icons/gitlab.svg";
import cpp from "../../assets/icons/c++.png";
import express from "../../assets/icons/express.svg";
import redux from "../../assets/icons/redux.png";
import firebase from "../../assets/icons/firebase.png";
import postgres from "../../assets/icons/postgres.png";
import rxjs from "../../assets/icons/rxjs.png";
import azure from "../../assets/icons/azure.png";
import bootstrap from "../../assets/icons/bootstrap.png";
import myphoto from "../../assets/kanishkaAboutMe.jpg";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  const [loadedProfileimg, setloadedProfileimg] = useState(false);
  const [loadedgithubimg, setloadedgithubimg] = useState(false);
  const styles = useStyleConfig("Card");
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr",
            }}
            templateRows={{
              lg: "1fr",
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
              />
              <Skeleton
                height="100%"
                isLoaded={loadedProfileimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={myphoto}
                  width="100%"
                  height="100%"
                  alt="Profile"
                  effect="blur"
                  style={{ height: "100%" }}
                  onLoad={() => setloadedProfileimg(true)}
                />
              </Skeleton>
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<ABOUT ME/>"}
                </Text>
                {/* <Text
                  color={textColorPrimary}
                  fontSize="md"
                  textAlign="justify"
                  px="10px"
                  lineHeight="1.9"
                >
                  Hello! I'm Kanishka, a Software Development Engineer at Truminds
                  Software Systems based in Bengaluru. I hold a Master’s degree from
                  BIT Mesra, Ranchi. I am deeply passionate about crafting clean,
                  efficient, and scalable web applications, and I thrive in
                  collaborative environments that challenge me technically and
                  creatively. My journey in tech has been driven by curiosity and
                  the desire to build products that make a difference. Outside of
                  work, I enjoy exploring new places, playing music, and engaging
                  in sports, all of which keep me energized and inspired in my
                  personal and professional growth.
                </Text> */}
                <Text
  color={textColorPrimary}
  fontSize="md"
  textAlign="justify"
  px="10px"
  lineHeight="1.9"
>
  I’m Kanishka Amritkar, a 3rd-year Computer Science student at SPIT, Mumbai. I'm a
  passionate full-stack web developer with hands-on experience in React, Tailwind CSS,
  Node.js, Flask, Next.js, Firebase, MongoDB, and MySQL. I'm deeply interested in the
  evolving field of Generative AI and its applications.

  Currently, I work as a full-stack developer at Triblet—our college startup—where I’ve
  contributed to both frontend and backend using React and Firebase, and I'm actively
  involved in deployment of our web application. I've also interned with Birlasoft (an MNC),
  where I worked on React-based frontend, API routing, and multi-PDF upload features
  using Multer.

  I’ve won the AI in Microfinance competition with my project FIN.GPT—a tool that
  performs KYC verification, AML detection, and ESG scoring using GenAI. I'm also
  pursuing a major project on GenAI for education, aiming to make learning more
  personalized and engaging.

  Previously, I built a hospitality management system using LSTM models and collaborative
  filtering, and I'm in the process of patenting our idea for a real-time attention detection
  system. I also emerged as a winner in the National Entrepreneurship Challenge conducted
  by IIT Bombay. I love building, scaling, and deploying meaningful tech—one project at a time.
</Text>

              </Box>
            </Flex>
          </Grid>
        </Flex>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY SKILLSET/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <TechStackCard imagepath={angular} />
          <TechStackCard imagepath={react} />
          <TechStackCard imagepath={js} />
          <TechStackCard imagepath={typescript} />
          <TechStackCard imagepath={redux} background="white" />
          <TechStackCard imagepath={rxjs} background="white" />
          <TechStackCard imagepath={cpp} />
          <TechStackCard imagepath={node} />
          <TechStackCard imagepath={mongo} />
          <TechStackCard imagepath={postgres} />
          <TechStackCard imagepath={express} background="white" />
          <TechStackCard imagepath={git} />
          <TechStackCard imagepath={gitlab} />
          <TechStackCard imagepath={firebase} />
          <TechStackCard imagepath={html} />
          <TechStackCard imagepath={css} />
          <TechStackCard imagepath={bootstrap} />
          <TechStackCard imagepath={azure} />
        </SimpleGrid>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY GITHUB CONTRIBUTIONS/>"}
          </Text>
        </Flex>
        <Box display="flex" justifyContent="center" alignItems="center">
          <GitHubCalendar
            username="rahul1582"
            colorScheme={colorMode === "light" ? "light" : "dark"}
            year="last"
          />
        </Box>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Skeleton
            height="100%"
            isLoaded={loadedgithubimg}
            color="white"
            fadeDuration={1}
          >
            <LazyLoadImage
              src={
                colorMode === "light"
                  ? "https://github-readme-streak-stats.herokuapp.com?user=Rahul1582&theme=whatsapp-light&hide_border=true&border_radius=5.8&date_format=j%20M%5B%20Y%5D"
                  : "https://github-readme-streak-stats.herokuapp.com?user=Rahul1582&theme=calm-pink&hide_border=true&border_radius=5.8&date_format=j%20M%5B%20Y%5D"
              }
              alt="GitHub Streak"
              effect="blur"
              onLoad={() => setloadedgithubimg(true)}
            />
          </Skeleton>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Link href="https://github.com/knishkagithub" target="blank">
            <Button variant="darkBrand" fontSize="sm" fontFamily="DM Sans">
              Visit Github
            </Button>
          </Link>
        </Flex>

        {/* <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY INTERESTS AND HOBBIES/>"}
          </Text>
        </Flex> */}
        <Flex
  direction="row"
  justifyContent="center"
  alignItems="center"
  mb="40px"
  mt="40px"
>
  <Text color={textColorPrimary} fontSize="2em" textAlign="center">
    {"<MY ACHIEVEMENTS/>"}
  </Text>
</Flex>
        {/* <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdFlightTakeoff}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Travelling & Exploring</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              I am passionate about traveling and exploring new places. Whether
              it's uncovering hidden gems or embarking on exciting adventures,
              I thrive on discovering new cultures, cuisines, and landscapes.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={LiaDrumSolid}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing Drums</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Playing drums gives me joy and helps me express myself creatively.
              Whether it's jamming or learning new beats, it's a big part of my relaxation.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={GiCricketBat}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing Outdoor Games</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              I love sports like cricket and football. Outdoor games keep me active and
              help me build strong connections with friends and teammates.
            </Text>
          </Box>
        </SimpleGrid> */}
        <SimpleGrid
  columns={{ base: 1, xl: 3 }}
  gap="20px"
  mb="20px"
  align={{ base: "center", xl: "center" }}
  justify={{ base: "center", xl: "center" }}
>
  <Box __css={styles}>
    <Text fontSize="xl" fontWeight="bold" textAlign="center" mb="10px">
      🏆 AI in Microfinance Winner
    </Text>
    <Text color={textColorPrimary} textAlign="center">
      Built <strong>FIN.GPT</strong>, a GenAI platform for KYC verification,
      AML detection, and ESG scoring. Recognized for real-world financial innovation.
    </Text>
  </Box>

  <Box __css={styles}>
    <Text fontSize="xl" fontWeight="bold" textAlign="center" mb="10px">
      📄 Patent Work in Progress
    </Text>
    <Text color={textColorPrimary} textAlign="center">
      Co-inventor of a <strong>Real-Time Attention Detection System</strong> for
      EdTech surveillance using eye-tracking and GenAI techniques.
    </Text>
  </Box>

  <Box __css={styles}>
    <Text fontSize="xl" fontWeight="bold" textAlign="center" mb="10px">
      🥇 Winner: IIT Bombay NEC
    </Text>
    <Text color={textColorPrimary} textAlign="center">
      National Entrepreneurship Challenge winner. Built tech-enabled solutions under pressure,
      collaborated with peers, and led innovative contributions.
    </Text>
  </Box>
</SimpleGrid>
      </Box>
    </Box>
  );
}

