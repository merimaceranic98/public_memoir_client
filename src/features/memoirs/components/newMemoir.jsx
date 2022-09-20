import React, { useState } from "react";
import { Container, useToast, useColorModeValue } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Button } from "@chakra-ui/react";
import Textarea from "react-textarea-autosize";

import { addNewMemoir } from "../actions/memoirs-actions";
import ImageUploader from "../../imageUploader/components/imageUploader";

const NewMemoir = () => {
  const [memoirDescription, setMemoirDescription] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const [formImage, setFormImage] = useState(null);
  const [formImageName, setFormImageName] = useState(null);
  const textAreaBackgroundColor = useColorModeValue("#ffff", "#1A202C");

  const handleOnDrop = (files) => {
    const file = files[0];
    let fileReader = null;
    fileReader = new FileReader();
    fileReader.onload = (e) => {
      const result = e.target.result;
      setFormImage(result);
    };
    fileReader.readAsDataURL(file);
    setFormImageName(file.name);
  };

  const handleMemoirDescriptionChanged = (event) => {
    setMemoirDescription(event.target.value);
  };

  const onSubmit = () => {
    const data = {
      image: formImage,
      content: memoirDescription,
    };
    dispatch(addNewMemoir(data));
    setMemoirDescription("");
    setFormImage(null);
    setFormImageName(null);
    toast({
      position: "top",
      title: "Added new memoir",
      description: "You've added new memoir.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Container mt={"50px"}>
      <ImageUploader
        formImage={formImage}
        formImageName={formImageName}
        name="image"
        onDrop={(event) => handleOnDrop(event)}
      />
      <Textarea
        style={{
          width: "100%",
          paddingTop: "4px",
          paddingBottom: "4px",
          outline: "none",
          margin: "0 auto",
          backgroundColor: textAreaBackgroundColor,
        }}
        maxLength={1000}
        value={memoirDescription}
        placeholder={"Memoir description..."}
        onChange={(e) => handleMemoirDescriptionChanged(e)}
      />
      <Button type="submit" onClick={() => onSubmit()} mt={2} w={"100%"} mb={4}>
        Add new memoir
      </Button>
    </Container>
  );
};

export default NewMemoir;
