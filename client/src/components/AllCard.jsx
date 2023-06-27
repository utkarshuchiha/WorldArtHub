import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCloudDownload } from "react-icons/bs";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import { handleDownload } from "../assets/utils/download";
import Error from "./Error";

const AllCard = () => {
  const [allPost, setAllPost] = useState([]);
  const [err, setErr] = useState(false);

  const download = (id, img) => {
    handleDownload(id, img);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await axios.get("http://localhost:8000/post/all-posts");
        if (!post) {
          setErr(true);
        }

        setAllPost(post.data.posts);
      } catch (error) {
        setErr(true);
      }
    };
    fetchPost();
  }, [allPost]);
  return (
    <>
      {err ? (
        <Error props={"100vh"}/>
      ) : (
        <Container
          minW={"full"}
          mt={2}
          minH={"100vh"}
          mb={4}
          bgColor={"gray.50"}
        >
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
            bg={"gray.50"}
          >
            {allPost.map((p) => (
              <Card minH={"400px"}>
                <CardBody bgColor={"chakra-body-bg._light"}>
                  <Image
                    src={p.img}
                    alt={p.prompt}
                    borderRadius="lg"
                    boxSize="400px"
                    key={p._id}
                    objectFit={"contain"}
                  />
                </CardBody>

                <CardFooter>
                  {p.prompt}
                  <BsCloudDownload
                    size={"50px"}
                    onClick={() => download(p._id, p.img)}
                    style={{ cursor: "pointer" }}
                  ></BsCloudDownload>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      )}
    </>
  );
};

export default AllCard;
