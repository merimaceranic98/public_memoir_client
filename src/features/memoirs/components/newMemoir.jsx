import { Container } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormErrorMessage, FormControl, Input, Button } from "@chakra-ui/react";
import Textarea from "react-textarea-autosize";

const NewMemoir = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    console.log("Values are, ", values);
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
          id="feed_comment_input_textarea"
          // ref={this.textareaInput}
          // rows={1}
          // maxLength={maxMessageLength}
          // value={textareaValue}
          // placeholder={placeholder}
          // onChange={this.handleInputChanged}
          // tabIndex={tabIndex || 0}
          // className={`${!isEmpty(images) ? 'top-border-radius' : ''}`}
          // data-cy="comment-input"
          // onHeightChange={this.handleTextareaHeightChange}
          // useCacheForDOMMeasurements={true}
        />
        <Button type="submit" isLoading={isSubmitting} mt={4} w={"100%"} mb={4}>
          Add new memoir
        </Button>
      </form>
    </Container>
  );
};

export default NewMemoir;
