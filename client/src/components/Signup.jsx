import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = {
      username: name,
      email,
      password,
    };
    const response = await axios.post(
      "http://localhost:8000/user/signup",
      data
    );
    if (response.data.status === true) navigate("/login");
    else {
      setErr(response.data.msg);
    }
  };

  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
          bgColor={"gray.50"}
          p={2}
          borderRadius={"25px"}
        >
          <Heading
            alignSelf={"center"}
            bgGradient="linear(to-l, #fc466b, #3f5efb)"
            bgClip="text"
            fontWeight="extrabold"
          >
            WORLDART HUB
          </Heading>
          <Avatar alignSelf={"center"} boxSize={"100px"} bgColor={"blue.200"} />

          <Input
            value={name}
            placeholder={"Name"}
            type={"text"}
            isRequired
            focusBorderColor={"purple.500"}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            value={email}
            placeholder={"Email"}
            type={"email"}
            isRequired
            focusBorderColor={"purple.500"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            value={password}
            placeholder={"Password"}
            type={"password"}
            isRequired
            focusBorderColor={"purple.500"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button colorScheme={"purple"} type={"submit"} onClick={handleSignUp}>
            Sign Up
          </Button>

          <Text textAlign={"right"}>
            Already Signed Up?{" "}
            <Button variant={"link"} colorScheme={"purple"}>
              <Link to={"/login"}>Login In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
      {err ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{err}</AlertTitle>
          <AlertDescription>TRY AGAIN </AlertDescription>
        </Alert>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Signup;
