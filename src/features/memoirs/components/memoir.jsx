import { Box, GridItem, Image } from "@chakra-ui/react";

const Memoir = (props) => {
  const { image, content, isTemplateColumns } = props;
  return (
    <GridItem mb={2}>
      <Box
        backgroundColor={isTemplateColumns && "gray.100"}
        height={isTemplateColumns ? "400px" : "300px"}
        borderTopRadius={!isTemplateColumns && "8px"}
        borderBottomRadius={"8px"}
        pt={!isTemplateColumns && "8px"}
        width={!isTemplateColumns && "50%"}
        margin={!isTemplateColumns && "0 auto"}
        border={!isTemplateColumns && "1px solid #EDF2F7"}
      >
        <Image
          alt={content}
          src={image}
          borderTopRadius={"8px"}
          height={"70%"}
          width={isTemplateColumns ? "100%" : "auto"}
          margin={!isTemplateColumns && "0 auto"}
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
          backgroundColor={isTemplateColumns && "gray.100"}
        >
          {content}
        </Box>
      </Box>
    </GridItem>
  );
};

export default Memoir;
