import React, { useContext, useEffect } from "react";
import { Box, Button, Flex, HStack, Heading, Image } from "@chakra-ui/react";
import img1 from "../assets/1.png";
import { Link } from "react-router-dom";
import loginContext from "../context/loginstatus/loginContext";

const Header = () => {
  const { loggedIn, setLoggedIn } = useContext(loginContext);


  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  useEffect(()=>{
    if(localStorage.getItem('token'))
    setLoggedIn(true);
  },[loggedIn]);


  return (
    <Box bg="blackAlpha.900" w="100%" color="white">
      <Flex py={6} px={2} justifyContent={"space-between"}>
        <HStack>
          <Image
            src={img1}
            alt="logo"
            boxSize={["40px"]}
            objectFit="cover"
            borderRadius="full"
            display={["none", "flex"]}
          />
          <Heading as="h2" px={1} size={["md", "2xl"]}>
            <Link to="/">WORLDART HUB</Link>
          </Heading>
          <Button
            colorScheme={"purple"}
            variant={"ghost"}
            display={["none", "contents"]}
            size={"lg"}
            px={4}
            mx={7}
          >
            <Link to="/all-posts">Explore</Link>
          </Button>
        </HStack>

        <HStack>
          <Button
            colorScheme={"purple"}
            variant={"ghost"}
            display={["none", "contents"]}
          >
            <Link to={loggedIn ? "/create-post" : "/login"}>CREATE</Link>
          </Button>
          {loggedIn ? (
            <Button onClick={handleLogout}>
              <Link to="/">Log Out</Link>
            </Button>
          ) : (
            <Button>
              <Link to="/login">Log In</Link>
            </Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
