import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { FormErrorMessage, FormControl, Input, Button } from "@chakra-ui/react";
import Textarea from "react-textarea-autosize";

import { addNewMemoir } from "../actions/memoirs-actions";

const NewMemoir = () => {
  const [memoirDescription, setMemoirDescription] = useState("");
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    const data = {
      image: values.image,
      content: memoirDescription,
    };
    dispatch(addNewMemoir(data));
    reset();
    setMemoirDescription("");
  };

  const handleMemoirDescriptionChanged = (event) => {
    setMemoirDescription(event.target.value);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.image} mt={4}>
          <Input
            id="image"
            variant="flushed"
            placeholder="Image"
            {...register("image", {
              required: "Image is required field!",
            })}
          />
          <FormErrorMessage>
            {errors.image && errors.image.message}
          </FormErrorMessage>
        </FormControl>
        <Textarea
          style={{
            width: "100%",
            paddingTop: "4px",
            paddingBottom: "4px",
            outline: "none",
          }}
          maxLength={1000}
          value={memoirDescription}
          placeholder={"Memoir description..."}
          onChange={(e) => handleMemoirDescriptionChanged(e)}
        />
        <Button type="submit" isLoading={isSubmitting} mt={2} w={"100%"} mb={4}>
          Add new memoir
        </Button>
      </form>
    </Container>
  );
};

export default NewMemoir;
