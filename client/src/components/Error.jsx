import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";

const Error = (props) => {
  return (
    <Alert status="error" minH={props} justifyContent={"center"}>
      <AlertIcon />
      <AlertTitle>MY ENGINE IS OVERHEATED</AlertTitle>
      <AlertDescription>TRY AGAIN LATER</AlertDescription>
    </Alert>
  );
};

export default Error;
