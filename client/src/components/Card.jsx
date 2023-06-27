import { Image, Flex, Button, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Error from "./Error";

const Card = ({ finalOutput }) => {
  const { err, setErr } = useState(false);
  const navigate = useNavigate();
  const handleShare = async () => {
    try {
      const data = {
        img: finalOutput.url.url,
        prompt: finalOutput.prompt,
      };
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:8000/post/create-post",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.status === true) navigate("/all-posts");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <Flex align={"center"} justify={"center"} h={"auto"}>
      {finalOutput.url === "true" || err ? (
        <Error />
      ) : (
        <>
          <VStack>
            <Image
              src={finalOutput.url.url}
              boxSize={["200px", "360px"]}
              objectFit="cover"
              pos={"relative"}
              loading="lazy"
            />

            <Button colorScheme="purple" onClick={handleShare}>
              <Link to="/all-posts">POST TO COMMUNITY</Link>
            </Button>
          </VStack>
        </>
      )}
    </Flex>
  );
};

export default Card;
