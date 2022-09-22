import { Text, Button, Container, useColorModeValue } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { FilePlus } from "react-feather";

function UploaderImage(props) {
  const { onDrop, isLoading, name, formImageName } = props;
  const iconColor = useColorModeValue("black", "white");
  const buttonColor = useColorModeValue("#ffff", "#1A202C");
  const containerBorderColor = useColorModeValue("rgba(0,0,0,0.1)", "#4A5568");

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
      border={`2px dashed ${containerBorderColor}`}
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
          background: buttonColor,
          color: "#ED2130",
        }}
        _focus={{
          background: buttonColor,
          color: "#ED2130",
        }}
        backgroundColor={buttonColor}
        onClick={open}
        isLoading={isLoading}
      >
        <FilePlus style={{ color: iconColor }} />
      </Button>
      <input name={name} {...getInputProps()} />
    </Container>
  );
}

export default UploaderImage;
