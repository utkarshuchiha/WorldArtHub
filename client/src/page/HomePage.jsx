import React, { useContext } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import img1 from "../assets/1.png";
import { Link } from "react-router-dom";
import loginContext from "../context/loginstatus/loginContext";
const Home = () => {

  const {loggedIn}=useContext(loginContext);

  return (
    <>
      <Box w={"full"} h={"100vh"} bgColor={"gray.100"}>
        <Container maxW={"full"}>
          <VStack alignItems={["flex-start","center"]}>
            <Image
              src={img1}
              mt={10}
              boxSize={"200px"}
              objectFit={"cover"}
              borderRadius={"full"}
              alignSelf={"center"}
            ></Image>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize={["4xl","6xl"]}
              fontWeight="extrabold"
              letterSpacing={["0","2"]}
            >
              WORLDART HUB
            </Text>
            <Spacer />
            <Heading color={"purple"} >
              The world’s most powerful AI photo art generation engine.
            </Heading>
            <Heading color={"purple"}>What will you create?</Heading>
            <Spacer m={4} />
            <Button colorScheme="pink">
              <Link to={loggedIn?"/create-post":"/login"}>TURN TO IMAGINATION INTO REALITY</Link>
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
