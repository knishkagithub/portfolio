import { React, useEffect } from "react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import { Box, useStyleConfig, Flex, Button } from "@chakra-ui/react";

export default function Resume() {
  const styles = useStyleConfig("Card");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[]);

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  // const handleDownload = () => {
  //   window.location.href =
  //     // "https://drive.google.com/uc?export=download&id=1vAJPgdS7Ka94EdaV3rcTqOk1Ky01_9jC";
  //     // "https://drive.google.com/file/d/1_Gf5dC0s3XMVrhyA4x_-TOQysPvY_deE/view?usp=sharing";
  //     // "https://drive.google.com/file/d/1_Gf5dC0s3XMVrhyA4x_-TOQysPvY_deE/view?usp=sharing";
  //     "https://drive.google.com/uc?export=download&id=1_Gf5dC0s3XMVrhyA4x_-TOQysPvY_deE";

  // };
  const handleDownload = () => {
    window.location.href = "https://drive.google.com/uc?export=download&id=1_Gf5dC0s3XMVrhyA4x_-TOQysPvY_deE";
  };
  
  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            width={{ base: "100%", md: "70%", xl: "70%" }}
            height={{ base: "60vh", md: "100vh", xl: "130vh" }}
            overflow="hidden"
            borderRadius="md"
          >
            {/* <iframe
              src="https://drive.google.com/file/d/1vAJPgdS7Ka94EdaV3rcTqOk1Ky01_9jC/preview"
              title="Resume"
              width="100%"
              height="100%"
              style={{ border: "5px solid" }}
              loading="lazy"
            ></iframe> */}
            <iframe
  src="https://drive.google.com/file/d/1_Gf5dC0s3XMVrhyA4x_-TOQysPvY_deE/preview"
  title="Resume"
  width="100%"
  height="100%"
  style={{ border: "5px solid" }}
  loading="lazy"
/>

          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Button
            onClick={handleDownload}
            variant="darkBrand"
            fontSize="sm"
            fontFamily="DM Sans"
          >
            Download Resume
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
