import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginContext from "../context/loginstatus/loginContext";
import axios from "axios";
import { URL } from "../assets/utils/baseurl";

const Login = () => {
  const { setLoggedIn } = useContext(loginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  let handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        `${URL}user/login`,
        data
      );

      if (response.data.status === true) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setLoggedIn(true);
        navigate("/create-post");
      } else {
        setErr(response.data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
      navigate("/create-post");
    }
  }, [navigate, setLoggedIn]);

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
          <Heading alignSelf={"center"} mt={2}>
            Welcome Back
          </Heading>

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

          <Button colorScheme={"purple"} type={"submit"} onClick={handleLogin}>
            Log In
          </Button>

          <Text textAlign={"right"}>
            New User?{" "}
            <Button variant={"link"} colorScheme={"purple"}>
              <Link to={"/signup"}>Sign Up</Link>
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

export default Login;
