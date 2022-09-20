import {
  Box,
  GridItem,
  Image,
  Modal,
  ModalFooter,
  ModalContent,
  Button,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getMemoirById } from "../actions/memoirs-actions";

const Memoir = (props) => {
  const memoir = useSelector((state) => state.memoirs.memoir);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { image, content, isTemplateColumns, id } = props;
  const boxBackgroundColor = useColorModeValue("gray.100", "gray.700");
  const boxBorderColor = useColorModeValue("#EDF2F7", "#2D3748");

  const showMemoirDetails = (memoirId) => {
    dispatch(getMemoirById(memoirId));
    onOpen();
  };
  return (
    <>
      <Tooltip label="Click here to see full description">
        <GridItem mb={2} onClick={() => showMemoirDetails(id)}>
          <Box
            backgroundColor={isTemplateColumns && boxBackgroundColor}
            height={isTemplateColumns ? "400px" : "300px"}
            borderTopRadius={!isTemplateColumns && "8px"}
            borderBottomRadius={"8px"}
            pt={!isTemplateColumns && "8px"}
            width={!isTemplateColumns && "50%"}
            margin={!isTemplateColumns && "0 auto"}
            border={!isTemplateColumns && `1px solid ${boxBorderColor}`}
          >
            <Image
              alt={content}
              src={image}
              borderTopRadius={"8px"}
              height={"70%"}
              width={isTemplateColumns ? "100%" : "auto"}
              margin={!isTemplateColumns && "0 auto"}
              cursor={"pointer"}
            />
            <Box
              as="label"
              pt={isTemplateColumns ? "1rem" : "2rem"}
              display={"flex"}
              overflowX={"hidden"}
              textOverflow={"ellipsis"}
              paddingLeft={"8px"}
              noOfLines={2}
              textAlign={!isTemplateColumns && "center"}
              backgroundColor={isTemplateColumns && boxBackgroundColor}
              cursor={"pointer"}
            >
              {content}
            </Box>
          </Box>
        </GridItem>
      </Tooltip>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Memoir details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Image
                  alt={memoir.content}
                  src={memoir.image}
                  borderTopRadius={"8px"}
                  height={"70%"}
                />
                <Box
                  as="label"
                  display={"flex"}
                  overflowX={"hidden"}
                  paddingLeft={"8px"}
                >
                  {memoir.content}
                </Box>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} size={"xs"} onClick={onClose}>
                Close details
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  );
};

export default Memoir;
