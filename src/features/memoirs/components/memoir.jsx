import { Box, GridItem, Image } from "@chakra-ui/react";

const Memoir = (props) => {
  const { image, content } = props;
  return (
    <GridItem mb={2}>
      <Box
        backgroundColor={"gray.100"}
        height={"400px"}
        borderBottomRadius={"8px"}
      >
        <Image
          alt={content}
          src={image}
          borderTopRadius={"8px"}
          height={"70%"}
          width={"100%"}
        />
        <Box
          as="label"
          pt={"1rem"}
          display={"flex"}
          overflowX={"hidden"}
          textOverflow={"ellipsis"}
          paddingLeft={"8px"}
          noOfLines={2}
          backgroundColor={"gray.100"}
        >
          {content}
        </Box>
      </Box>
    </GridItem>
  );
};

export default Memoir;
