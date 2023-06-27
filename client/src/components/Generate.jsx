import {
  Button,
  Container,
  HStack,
  Heading,
  Spacer,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaWandSparkles } from "react-icons/fa6";
import { getRandomPrompt } from "../assets/utils/getRandomPrompt";
import Loader from "./Loader";
import axios from "axios";
import Card from "./Card";

const Generate = () => {
  let [value, setValue] = useState("");
  const [finalOutput, setFinalOutput] = useState({
    prompt: "",
    url: [],
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [change, setChange] = useState(false);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  let handleClick = () => {
    let inputValue = getRandomPrompt();
    setValue(inputValue);
  };

  let handleRequest = async () => {
    try {
      setGeneratingImg(true);
      setChange(false);
      const response = await axios.post(
        "http://localhost:8000/api/v1/generate",
        { prompt: value }
      );

      if (response) {
        setFinalOutput({
          prompt: response.data.prompt,
          url: response.data.url[0],
        });
      } else {
        setFinalOutput({
          prompt: "MY ENGINE IS OVERHEATED",
          url: "true",
        });
      }
    } catch (err) {
      setFinalOutput({
        prompt: "MY ENGINE IS OVERHEATED",
        url: "true",
      });
    } finally {
      setGeneratingImg(false);
      setChange(true);
    }
  };

  return (
    <>
      <Container minW={["full", "65vw"]} h={"82vh"} p={12}>
        {generatingImg ? (
          <Loader />
        ) : (
          <form>
            <VStack
              alignItems={"stretch"}
              spacing={"8"}
              w={["full", "60vw"]}
              bgColor={"gray.100"}
              p={8}
              maxH={"75vh"}
              borderRadius={"30px"}
            >
              <HStack justifyContent={"space-between"}>
                <Heading noOfLines={1} size={["sm", "md"]}>
                  Describe your creation in detail..
                </Heading>

                <Button
                  colorScheme="purple"
                  variant={"ghost"}
                  onClick={handleClick}
                >
                  Suprise Me
                </Button>
              </HStack>

              <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder="3d render ninja warrior "
                size="md"
                resize={"none"}
                bgColor={"white"}
                focusBorderColor={"black"}
                isRequired
              />

              <Button
                alignSelf={"center"}
                colorScheme="purple"
                onClick={handleRequest}
                minH={"10"}
              >
                GENERATE
                <Spacer mr={4} />
                <FaWandSparkles />
              </Button>

              {change && <Card finalOutput={finalOutput} />}
            </VStack>
          </form>
        )}
      </Container>
    </>
  );
};

export default Generate;
