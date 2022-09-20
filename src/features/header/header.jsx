import {
  Breadcrumb,
  BreadcrumbItem,
  Center,
  Container,
  Text,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("white", "gray.800");
  const linkColor = useColorModeValue("black", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Container
      maxW={"100%"}
      position={"fixed"}
      zIndex={2}
      bg={backgroundColor}
      top={0}
      border="1px"
      borderColor={borderColor}
      mb={3}
      display={{ base: "none", sm: "block" }}
    >
      <Center>
        <Flex flexDirection={"column"}>
          <Flex justifyContent={"center"}>
            <Breadcrumb spacing="8px" separator={""} p={2}>
              <BreadcrumbItem color={linkColor}>
                <Text>Memoir</Text>
              </BreadcrumbItem>
              <BreadcrumbItem>
                {colorMode === "light" ? (
                  <Sun
                    onClick={toggleColorMode}
                    width={20}
                    height={16}
                    cursor="pointer"
                  />
                ) : (
                  <Moon
                    onClick={toggleColorMode}
                    width={20}
                    height={16}
                    cursor="pointer"
                  />
                )}
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        </Flex>
      </Center>
    </Container>
  );
}
export default Header;
