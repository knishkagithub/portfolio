// // import { React, useState, useEffect } from "react";
// // import {
// //   Box,
// //   Flex,
// //   Icon,
// //   Image,
// //   SimpleGrid,
// //   Text,
// //   useColorModeValue,
// //   useStyleConfig,
// //   Skeleton
// // } from "@chakra-ui/react";
// // import routes from "../../routes";
// // import Navbar from "../../components/Navbar/Navbar";
// // import contactimg from "../../assets/contact.png";
// // import contactimg1 from "../../assets/contact1.png";
// // import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
// // import { FaLocationDot } from "react-icons/fa6";
// // import { Link } from "react-router-dom";

// // export default function Contact() {
// //   const [loadedimage1, setloadedimage1] = useState(false);
// //   const [loadedimage2, setloadedimage2] = useState(false);
// //   const styles = useStyleConfig("Card");
// //   const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");

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
// //       <Box pt="30px">
// //         <Flex justifyContent="center" alignItems="center">
// //           <Box>
// //             <Skeleton
// //               isLoaded={loadedimage1}
// //               color="white"
// //               fadeDuration={1}
// //               height={"100%"}
// //             >
// //               <Image
// //                 src={contactimg}
// //                 onLoad={() => setloadedimage1(true)}
// //               ></Image>
// //             </Skeleton>
// //           </Box>
// //           <Box>
// //             <Skeleton
// //               isLoaded={loadedimage2}
// //               color="white"
// //               fadeDuration={1}
// //               width={"100%"}
// //               height={"100%"}
// //             >
// //               <Image
// //                 src={contactimg1}
// //                 onLoad={() => setloadedimage2(true)}
// //               ></Image>
// //             </Skeleton>
// //           </Box>
// //         </Flex>

// //         <SimpleGrid
// //           columns={{ base: 1, xl: 3, "2xl": 3 }}
// //           gap="20px"
// //           mt={{ sm: "20px", xl: "0" }}
// //           mb="20px"
// //           align={{ base: "center", xl: "center" }}
// //           justify={{ base: "center", xl: "center" }}
// //         >
// //           <Flex
// //             direction="column"
// //             justifyContent="center"
// //             alignItems="center"
// //             textAlign="center"
// //           >
// //             <Box __css={styles}>
// //               <Box textAlign="center">
// //                 <Icon
// //                   as={FaLocationDot}
// //                   width="30px"
// //                   height="30px"
// //                   color="inherit"
// //                 />
// //               </Box>
// //               <Text textAlign="center">FIND ME @</Text>
// //               <Text color={textColorPrimary} textAlign="center" mt="5px">
// //                 Truminds Software Systems
// //               </Text>
// //             </Box>
// //           </Flex>
// //           <Flex
// //             direction="column"
// //             justifyContent="center"
// //             alignItems="center"
// //             textAlign="center"
// //           >
// //             <Box __css={styles}>
// //               <Box textAlign="center">
// //                 <Link
// //                   to="#"
// //                   onClick={(e) => {
// //                     window.location.href = "mailto:rahulkpatro@example.com";
// //                     e.preventDefault();
// //                   }}
// //                 >
// //                   <Icon
// //                     as={AiOutlineMail}
// //                     width="30px"
// //                     height="30px"
// //                     color="inherit"
// //                     cursor="pointer"
// //                   />
// //                 </Link>
// //               </Box>

// //               <Text textAlign="center">EMAIL ME @</Text>

// //               <Text color={textColorPrimary} textAlign="center" mt="5px">
// //                 rahulkpatro@gmail.com
// //               </Text>
// //             </Box>
// //           </Flex>
// //           <Flex
// //             direction="column"
// //             justifyContent="center"
// //             alignItems="center"
// //             textAlign="center"
// //           >
// //             <Box __css={styles}>
// //               <Box textAlign="center">
// //                 <Icon
// //                   as={AiFillPhone}
// //                   width="30px"
// //                   height="30px"
// //                   color="inherit"
// //                 />
// //               </Box>
// //               <Text textAlign="center">CALL ME @</Text>
// //               <Text color={textColorPrimary} textAlign="center" mt="5px">
// //                 (+91)-7667232335
// //               </Text>
// //             </Box>
// //           </Flex>
// //         </SimpleGrid>
// //       </Box>
// //     </Box>
// //   );
// // }
// import { React, useState, useEffect } from "react";
// import {
//   Box,
//   Flex,
//   Icon,
//   Image,
//   SimpleGrid,
//   Text,
//   useColorModeValue,
//   useStyleConfig,
//   Skeleton,
// } from "@chakra-ui/react";
// import routes from "../../routes";
// import Navbar from "../../components/Navbar/Navbar";
// import contactimg from "../../assets/contact.png";
// import contactimg1 from "../../assets/contact1.png";
// import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Contact() {
//   const [loadedimage1, setloadedimage1] = useState(false);
//   const [loadedimage2, setloadedimage2] = useState(false);
//   const styles = useStyleConfig("Card");
//   const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");

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
//       <Box pt="30px">
//         <Flex justifyContent="center" alignItems="center">
//           <Box>
//             <Skeleton
//               isLoaded={loadedimage1}
//               color="white"
//               fadeDuration={1}
//               height={"100%"}
//             >
//               <Image src={contactimg} onLoad={() => setloadedimage1(true)} />
//             </Skeleton>
//           </Box>
//           <Box>
//             <Skeleton
//               isLoaded={loadedimage2}
//               color="white"
//               fadeDuration={1}
//               width={"100%"}
//               height={"100%"}
//             >
//               <Image src={contactimg1} onLoad={() => setloadedimage2(true)} />
//             </Skeleton>
//           </Box>
//         </Flex>

//         <SimpleGrid
//           columns={{ base: 1, xl: 3, "2xl": 3 }}
//           gap="20px"
//           mt={{ sm: "20px", xl: "0" }}
//           mb="20px"
//           align={{ base: "center", xl: "center" }}
//           justify={{ base: "center", xl: "center" }}
//         >
//           {/* GitHub */}
//           <Flex
//             direction="column"
//             justifyContent="center"
//             alignItems="center"
//             textAlign="center"
//           >
//             <Box __css={styles}>
//               <Box textAlign="center">
//                 <Link to="#" onClick={(e) => {
//                   e.preventDefault();
//                   window.open("https://github.com/knishkagithub", "_blank");
//                 }}>
//                   <Icon as={FaGithub} width="30px" height="30px" cursor="pointer" />
//                 </Link>
//               </Box>
//               <Text textAlign="center">FIND ME @</Text>
//               <Text color={textColorPrimary} textAlign="center" mt="5px">
//                 knishkagithub
//               </Text>
//             </Box>
//           </Flex>

//           {/* Email */}
//           <Flex
//             direction="column"
//             justifyContent="center"
//             alignItems="center"
//             textAlign="center"
//           >
//             <Box __css={styles}>
//               <Box textAlign="center">
//                 <Link to="#" onClick={(e) => {
//                   e.preventDefault();
//                   window.location.href = "mailto:kanishkaamritkar@gmail.com";
//                 }}>
//                   <Icon as={AiOutlineMail} width="30px" height="30px" cursor="pointer" />
//                 </Link>
//               </Box>
//               <Text textAlign="center">EMAIL ME @</Text>
//               <Text color={textColorPrimary} textAlign="center" mt="5px">
//                 kanishkaamritkar@gmail.com
//               </Text>
//             </Box>
//           </Flex>

//           {/* LinkedIn */}
//           <Flex
//             direction="column"
//             justifyContent="center"
//             alignItems="center"
//             textAlign="center"
//           >
//             <Box __css={styles}>
//               <Box textAlign="center">
//                 <Link to="#" onClick={(e) => {
//                   e.preventDefault();
//                   window.open("https://linkedin.com/in/kanishka-amritkar", "_blank");
//                 }}>
//                   <Icon as={FaLinkedin} width="30px" height="30px" cursor="pointer" />
//                 </Link>
//               </Box>
//               <Text textAlign="center">LINKEDIN ME @</Text>
//               <Text color={textColorPrimary} textAlign="center" mt="5px">
//                 kanishka-amritkar
//               </Text>
//             </Box>
//           </Flex>
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// }
import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  useStyleConfig,
  Skeleton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import contactimg from "../../assets/contact.png";
import contactimg1 from "../../assets/contact1.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [loadedimage1, setloadedimage1] = useState(false);
  const [loadedimage2, setloadedimage2] = useState(false);
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");

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
      <Box pt="30px">
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <Skeleton
              isLoaded={loadedimage1}
              color="white"
              fadeDuration={1}
              height="100%"
            >
              <Image src={contactimg} onLoad={() => setloadedimage1(true)} />
            </Skeleton>
          </Box>
          <Box>
            <Skeleton
              isLoaded={loadedimage2}
              color="white"
              fadeDuration={1}
              width="100%"
              height="100%"
            >
              <Image src={contactimg1} onLoad={() => setloadedimage2(true)} />
            </Skeleton>
          </Box>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mt={{ sm: "20px", xl: "0" }}
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          {/* GitHub */}
          <Flex direction="column" justifyContent="center" alignItems="center" textAlign="center">
            <Box __css={styles}>
              <ChakraLink href="https://github.com/knishkagithub" isExternal _hover={{ textDecoration: "none" }}>
                <Icon as={FaGithub} width="30px" height="30px" mb="2" />
                <Text textAlign="center">FIND ME @</Text>
                <Text color={textColorPrimary} mt="5px">knishkagithub</Text>
              </ChakraLink>
            </Box>
          </Flex>

          {/* Email */}
          <Flex direction="column" justifyContent="center" alignItems="center" textAlign="center">
            <Box __css={styles}>
              <ChakraLink href="mailto:kanishkaamritkar@gmail.com" _hover={{ textDecoration: "none" }}>
                <Icon as={AiOutlineMail} width="30px" height="30px" mb="2" />
                <Text textAlign="center">EMAIL ME @</Text>
                <Text color={textColorPrimary} mt="5px">kanishkaamritkar@gmail.com</Text>
              </ChakraLink>
            </Box>
          </Flex>

          {/* LinkedIn */}
          <Flex direction="column" justifyContent="center" alignItems="center" textAlign="center">
            <Box __css={styles}>
              <ChakraLink href="https://www.linkedin.com/in/kanishka-amritkar" isExternal _hover={{ textDecoration: "none" }}>
                <Icon as={FaLinkedin} width="30px" height="30px" mb="2" />
                <Text textAlign="center">LINKEDIN ME @</Text>
                <Text color={textColorPrimary} mt="5px">kanishka-amritkar</Text>
              </ChakraLink>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

