import React from "react";
import { Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      minH={"auto"}
      p="7"
      color={"white"}
      w={"full"}
    >
      <HStack w={"full"}>
        <Text fontSize={["md", "xl"]}>WORLDART HUB</Text>
        <Text>
          {" "}
          <AiOutlineCopyrightCircle />
        </Text>
        <Text fontSize={["sm", "md"]}>All rights are reserved</Text>

        <Spacer />
        <Button variant={"link"} colorScheme={"white"}>
          <a target={"black"} href="https://www.instagram.com/luffy_ut/">
            Instagram
          </a>
        </Button>

        <Button variant={"link"} colorScheme={"white"} ml={15}>
          <a
            target={"black"}
            href="https://github.com/utkarshuchiha?tab=repositories"
          >
            Github
          </a>
        </Button>
      </HStack>
    </Box>
  );
};

export default Footer;
