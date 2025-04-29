// // import { React, useEffect } from "react";
// // import {
// //   Box,
// //   SimpleGrid,
// //   Flex,
// //   Text,
// //   useColorModeValue,
// // } from "@chakra-ui/react";
// // import routes from "../../routes";
// // import Navbar from "../../components/Navbar/Navbar";
// // import ProjectCard from "../../components/ProjectCard/ProjectCard";
// // import nftproject from "../../assets/projects/nft_blockchain_500x300.jpg";
// // import medhub from "../../assets/projects/medhub_500x300.jpg";
// // import collab from "../../assets/projects/lets_collab_img3.jpg";
// // import blog from "../../assets/projects/bloggers.jpg";
// // import eeg from "../../assets/projects/eeg_500x300.jpg";
// // import mtrans from "../../assets/projects/mt_500x300.jpg";
// // import primeng from "../../assets/projects/primeng.png";
// // import steg from "../../assets/projects/steg_500x300.jpeg";

// // export default function Projects() {
// //   const textColorPrimary = useColorModeValue(
// //     "secondaryGray.900",
// //     "lightpeach.100"
// //   );

// //   useEffect(() => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   },[]);

// //   const getActiveRoute = (routes) => {
// //     for (let i = 0; i < routes.length; i++) {
// //       if (window.location.href.indexOf(routes[i].path) !== -1) {
// //         return routes[i].navbarDisplayName;
// //       }
// //     }
// //   };

// //   return (
// //     <Box>
// //       <Navbar displayText={getActiveRoute(routes)} />
// //       <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
// //         <Flex
// //           direction="row"
// //           justifyContent="center"
// //           alignItems="center"
// //           mb="40px"
// //         ></Flex>
// //         <SimpleGrid
// //           columns={{ base: 1, md: 3 }}
// //           gap="25px"
// //           alignItems="center"
// //           justifyContent="center"
// //         >
// //           <ProjectCard
// //             projectImage={primeng}
// //             projectName={"primefaces/primeng"}
// //             aboutProject={"Open Source Contribution"}
// //             techStack={"ANGULAR, JAVASCRIPT"}
// //             projectLiveLink="https://primeng.org/"
// //             projectLink="https://github.com/primefaces/primeng"
// //           />
// //           <ProjectCard
// //             projectImage={nftproject}
// //             projectName={"NFT Based E-Commerce Website"}
// //             aboutProject={"Blockchain based warranty using NFT"}
// //             techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB, SOLIDITY"}
// //             projectLiveLink="https://flipkart-grid-frontend.vercel.app/"
// //             projectLink="https://github.com/Rahul1582/NFT-Based-E-Commerce-Website"
// //           />
// //           <ProjectCard
// //             projectImage={collab}
// //             projectName={"LET'S COLLAB"}
// //             aboutProject={"A Realtime Chatting Application"}
// //             techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB"}
// //             projectLiveLink="https://lets-collab.vercel.app/"
// //             projectLink="https://github.com/Rahul1582/Lets_Collab"
// //           />
// //           <ProjectCard
// //             projectImage={medhub}
// //             projectName={"MedHub-360"}
// //             aboutProject={
// //               "An Advanced Medical-Healthcare Application To Analyse Medical Reports For Patients And Doctors"
// //             }
// //             techStack={
// //               "JAVASCRIPT, PYTHON, NODE JS, MONGODB, HTML, BOOTSTRAP, CSS,TESSERACT-OCR, FLASK"
// //             }
// //             projectLiveLink="https://medhub-360.vercel.app/"
// //             projectLink="https://github.com/Rahul1582/MedHub_360"
// //           />
// //           <ProjectCard
// //             projectImage={blog}
// //             projectName={"Bloggers Arena"}
// //             aboutProject={"A Blogging Website with User Authentication"}
// //             techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB"}
// //             projectLiveLink="https://bloggers-arena.vercel.app/"
// //             projectLink="https://github.com/Rahul1582/Bloggers-Arena"
// //           />
// //           <ProjectCard
// //             projectImage={eeg}
// //             projectName={"Emotion Recognition from Psychological Signals"}
// //             aboutProject={
// //               "Detection of Human Emotions from EEG signals using the AMIGOS Dataset"
// //             }
// //             techStack={
// //               "PYTORCH, CNN, SVC, PYTHON, FOURIER AND WAVELET TRANSFORMATIONS, STFT, ENTROPY, FEATURE FUSION"
// //             }
// //             projectLink="https://github.com/Rahul1582/Emotion-Recognition-from-Psychological-Signals"
// //           />
// //           {/* <ProjectCard
// //             projectImage={mtrans}
// //             projectName={"Machine Translation"}
// //             aboutProject={
// //               "Translated Texts With The Help Of Encoder- Decoder LSTM Model And Attention Mechanism"
// //             }
// //             techStack={"LSTM, ENCODER-DECODER, ATTENTION MECHANISM"}
// //             projectLink="https://github.com/Rahul1582/Bloggers-Arena"
// //           /> */}
// //         </SimpleGrid>
// //         <Flex
// //           direction="row"
// //           justifyContent="center"
// //           alignItems="Center"
// //           mt="40px"
// //           mb="40px"
// //         >
// //           <Text color={textColorPrimary} fontSize="2em" textAlign="center">
// //             {"<BLOGS/>"}
// //           </Text>
// //         </Flex>
// //         <SimpleGrid
// //           columns={{ base: 1, md: 2 }}
// //           gap="50px"
// //           alignItems="center"
// //           justifyContent="center"
// //         >
// //           <ProjectCard
// //             projectImage={steg}
// //             projectName={"Steganography Blog Part 1"}
// //             aboutProject={"This blog is about hiding text inside an Image"}
// //             projectLink="https://rahul1582.medium.com/steganography-6c9af950cbb3"
// //           />
// //           <ProjectCard
// //             projectImage={steg}
// //             projectName={"Steganography Blog Part 2"}
// //             aboutProject={"This Blog is about hiding an Image inside an Image"}
// //             projectLink="https://rahul1582.medium.com/steganography-part-2-ad7452a3ff1"
// //           />
// //         </SimpleGrid>
// //       </Box>
// //     </Box>
// //   );
// // }
// import { React, useEffect } from "react";
// import {
//   Box,
//   SimpleGrid,
//   Flex,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import routes from "../../routes";
// import Navbar from "../../components/Navbar/Navbar";
// import ProjectCard from "../../components/ProjectCard/ProjectCard";
// import nftproject from "../../assets/projects/nft_blockchain_500x300.jpg";
// import medhub from "../../assets/projects/medhub_500x300.jpg";
// import collab from "../../assets/projects/lets_collab_img3.jpg";
// import blog from "../../assets/projects/bloggers.jpg";
// import eeg from "../../assets/projects/eeg_500x300.jpg";
// import mtrans from "../../assets/projects/mt_500x300.jpg";
// import primeng from "../../assets/projects/primeng.png";
// import steg from "../../assets/projects/steg_500x300.jpeg";
// // import codelive from "../../assets/projects/code_editor.jpg";
// // import lifelens from "../../assets/projects/lifelens.jpg";

// export default function Projects() {
//   const textColorPrimary = useColorModeValue(
//     "secondaryGray.900",
//     "lightpeach.100"
//   );

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   const getActiveRoute = (routes) => {
//     for (let i = 0; i < routes.length; i++) {
//       if (window.location.href.indexOf(routes[i].path) !== -1) {
//         return routes[i].navbarDisplayName;
//       }
//     }
//   };

//   return (
//     <Box>
//       <Navbar displayText={getActiveRoute(routes)} />
//       <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
//         <Flex direction="row" justifyContent="center" alignItems="center" mb="40px" />

//         <SimpleGrid columns={{ base: 1, md: 3 }} gap="25px" alignItems="center" justifyContent="center">
//           <ProjectCard
//             // projectImage={lifelens}
//             projectName={"LifeLens AI"}
//             aboutProject={"Full-stack medical records platform with Aadhaar-based authentication, Firebase login, and patient-provider segregation. Built with React, Node.js, MySQL, and Scikit-learn for secure and scalable record handling."}
//             techStack={"REACT JS, NODE JS, MYSQL, FIREBASE, SCIKIT-LEARN"}
//           />

//           <ProjectCard
//             // projectImage={codelive}
//             projectName={"CodeSync"}
//             aboutProject={"A real-time collaborative code editor supporting live code syncing using Socket.io. Supports syntax highlighting and multi-user editing for interviews and coding sessions."}
//             techStack={"REACT JS, EXPRESS, NODE JS, SOCKET.IO, ACE EDITOR"}
//           />

//           <ProjectCard
//             projectImage={nftproject}
//             projectName={"NFT Warranty System"}
//             aboutProject={"E-commerce blockchain application for product warranty generation and verification using NFTs."}
//             techStack={"SOLIDITY, REACT JS, NODE JS, EXPRESS, MONGODB"}
//           />

//           <ProjectCard
//             projectImage={medhub}
//             projectName={"SmartStay Hospitality System"}
//             aboutProject={"AI-enabled platform for hotel analytics, review sentiment analysis, LSTM-based demand forecasting, and dynamic pricing using collaborative filtering."}
//             techStack={"REACT JS, NODE JS, FLASK, MYSQL, LSTM, NLTK"}
//           />

//           <ProjectCard
//             projectImage={eeg}
//             projectName={"Attention Detection System"}
//             aboutProject={"Patent-in-progress: AI-based real-time user attention detection using eye tracking, EAR metrics, and blink detection integrated with live feedback."}
//             techStack={"CV2, SCIKIT-LEARN, DLIB, PYTHON"}
//           />

//           <ProjectCard
//             projectImage={primeng}
//             projectName={"PrimeNG OSS"}
//             aboutProject={"Open-source contributions to the PrimeNG Angular UI library. Fixed multiple component bugs and improved accessibility for UI elements."}
//             techStack={"ANGULAR, TYPESCRIPT"}
//             projectLink="https://github.com/primefaces/primeng"
//           />
//         </SimpleGrid>

//         <Flex direction="row" justifyContent="center" alignItems="Center" mt="40px" mb="40px">
//           <Text color={textColorPrimary} fontSize="2em" textAlign="center">
//             {"<INTERNSHIPS/>"}
//           </Text>
//         </Flex>

//         <SimpleGrid columns={{ base: 1, md: 2 }} gap="50px" alignItems="center" justifyContent="center">
//           <ProjectCard
//             projectImage={blog}
//             projectName={"Web Dev Intern @ Birlasoft (MNC)"}
//             aboutProject={"Worked on React frontend, handled API integrations, GraphQL routing, and developed multi-PDF upload using Multer. Improved backend API performance and structure."}
//             techStack={"REACT, NODE JS, EXPRESS, GRAPHQL, MULTER"}
//           />

//           <ProjectCard
//             projectImage={collab}
//             projectName={"Full Stack Intern @ Triblet (Startup)"}
//             aboutProject={"Built and deployed college startup web app using React, Firebase, and Node. Led both frontend UI development and backend integrations, including auth and deployment."}
//             techStack={"REACT, FIREBASE, NODE JS, TAILWIND CSS"}
//           />
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// }
import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import nftproject from "../../assets/projects/nft_blockchain_500x300.jpg";
import medhub from "../../assets/projects/medhub_500x300.jpg";
import collab from "../../assets/projects/lets_collab_img3.jpg";
import blog from "../../assets/projects/bloggers.jpg";
import birla from "../../assets/projects/birlasoft.jpg";
import lifelens from "../../assets/projects/lifelens.jpeg";
import codesync from "../../assets/projects/codesync.jpg";
import lifelenss from "../../assets/projects/hospitality.jpeg";
import finance from "../../assets/projects/finance.png";
import saarthi from "../../assets/projects/ai_learning.png";

import eeg from "../../assets/projects/eeg_500x300.jpg";
import mtrans from "../../assets/projects/mt_500x300.jpg";
import primeng from "../../assets/projects/primeng.png";
import steg from "../../assets/projects/steg_500x300.jpeg";

// import codelive from "../../assets/projects/code_editor.jpg";
// import lifelens from "../../assets/projects/lifelens.jpg";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
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
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex direction="row" justifyContent="center" alignItems="center" mb="40px" />

        <SimpleGrid columns={{ base: 1, md: 3 }} gap="25px" alignItems="center" justifyContent="center">
          <ProjectCard
            projectImage={lifelens}
            projectName={"LifeLens AI"}
            aboutProject={"A full-stack platform enabling secure Aadhaar-based access to patient medical records. Includes Firebase auth, React.js UI, and scalable backend for 10,000+ records using Node.js and MySQL."}
            techStack={"REACT JS, NODE JS, MYSQL, SCIKIT-LEARN"}
          />

          <ProjectCard
            projectImage={codesync}
            projectName={"CodeSync"}
            aboutProject={"A real-time collaborative code editor using Socket.io. Built for interviews and pair programming with syntax highlighting and live multi-user updates."}
            techStack={"REACT, NODE JS, EXPRESS, SOCKET.IO"}
          />

          <ProjectCard
            projectImage={lifelenss}
            projectName={"SmartStay Hospitality Platform"}
            aboutProject={"An AI-powered hospitality system with LSTM-based demand forecasting, dynamic pricing, Maps integration, and review sentiment analysis. Built to help hotels optimize business operations."}
            techStack={"REACT, FLASK, MYSQL, LSTM, NLTK, COLLABORATIVE FILTERING"}
          />

          <ProjectCard
            projectImage={finance}
            projectName={"Fin.GPT"}
            aboutProject={"An AI-powered microfinance assistant for KYC verification, AML detection, ESG scoring, and risk profiling. Combines OCR, face detection, ML models, and web scraping for contextual financial analysis."}
            techStack={"FLASK, PYTHON, XGBOOST, MongoDB, OCR, REACT"}
          />

          <ProjectCard
            projectImage={saarthi}
            projectName={"AI-Based Learning Platform"}
            aboutProject={"A generative AI-powered e-learning solution aimed at enhancing engagement and personalization in education. Focused on automated video summaries and AI tutoring."}
            techStack={"GEN AI, PYTHON, FLASK, REACT,"}
          />
        </SimpleGrid>

        <Flex direction="row" justifyContent="center" alignItems="Center" mt="40px" mb="40px">
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<INTERNSHIPS/>"}
          </Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="50px" alignItems="center" justifyContent="center">
          <ProjectCard
            projectImage={birla}
            projectName={"Web Dev Intern @ Birlasoft (MNC)"}
            aboutProject={"Worked on frontend development using React. Integrated GraphQL, implemented routing, and developed multi-PDF upload using Multer. Optimized API performance."}
            techStack={"REACT, NODE JS, EXPRESS, GRAPHQL, MULTER"}
          />

          <ProjectCard
            // projectImage={collab}
            projectName={"Full Stack Intern @ Triblet (Startup)"}
            aboutProject={"Led frontend and backend dev for a live college startup. Built authentication, dashboards, Firebase integration, and full deployment using React and Tailwind."}
            techStack={"REACT, FIREBASE, NODE JS, TAILWIND"}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}