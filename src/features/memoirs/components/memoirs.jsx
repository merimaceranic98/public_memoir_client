import { Box, Button, Container, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { Grid as IconGrid, List } from "react-feather";

import Memoir from "./memoir";

const Memoirs = (props) => {
  const { memoirs } = props;
  const [isTemplateColumns, setIsTemplateColumns] = useState(true);

  const setTemplateRows = () => {
    setIsTemplateColumns(false);
  };
  const setTemplateColumns = () => {
    setIsTemplateColumns(true);
  };
  return (
    <Container maxW={"auto"}>
      <Box display={"flex"} justifyContent={"flex-end"} mb={"8px"}>
        <Button mr={"4px"} onClick={() => setTemplateRows()}>
          <List />
        </Button>
        <Button onClick={() => setTemplateColumns()}>
          <IconGrid />
        </Button>
      </Box>
      <Grid
        templateColumns={isTemplateColumns ? "repeat(4, 1fr)" : "none"}
        gap={6}
      >
        {memoirs.map((memoir) => {
          return (
            <Memoir
              key={memoir.id}
              image={memoir.image}
              content={memoir.content}
              isTemplateColumns={isTemplateColumns}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Memoirs;
