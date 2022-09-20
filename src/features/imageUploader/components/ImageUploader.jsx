import { Text, Button, Container } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { FilePlus } from "react-feather";

function ImageUploader(props) {
  const { onDrop, isLoading, name, formImageName } = props;

  const options = {
    noClick: true,
    noKeyboard: true,
    onDrop,
    disabled: isLoading,
  };
  const { getRootProps, getInputProps, open } = useDropzone(options);

  return (
    <Container
      display={"flex"}
      justifyContent={"space-between"}
      pt={"2px"}
      pb={"2px"}
      ml={0}
      border="2px dashed rgba(0,0,0,0.1)"
      alignItems="center"
      borderRadius="md"
      maxW={"auto"}
      {...getRootProps()}
      zIndex={0}
      margin={"0 auto"}
    >
      <Text color={"#A0AEC0"}>
        {formImageName !== null ? formImageName : "Browse or drag&drop"}
      </Text>
      <Button
        _hover={{
          background: "#fff",
          color: "#ED2130",
        }}
        _focus={{
          background: "#fff",
          color: "#ED2130",
        }}
        backgroundColor={"#fff"}
        onClick={open}
        isLoading={isLoading}
      >
        <FilePlus />
      </Button>
      <input name={name} {...getInputProps()} />
    </Container>
  );
}

export default ImageUploader;
