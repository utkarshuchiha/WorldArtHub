import { Container, Progress, Text } from '@chakra-ui/react';
import React from 'react'

const Loader = () => {
    return (
      <Container maxW={["full","65vw"]} h={"82vh"} p={[12,40]}  alignItems={"center"}>
        <Progress isIndeterminate size={"md"} />
        <Text as="em" fontSize={["xs","md"]} alignSelf={"center"} ml={["15%","40%"]}>Generating your Image...</Text>
      </Container>
    );
  };

export default Loader