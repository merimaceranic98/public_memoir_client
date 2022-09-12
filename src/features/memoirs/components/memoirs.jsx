import { Container, Grid } from "@chakra-ui/react";

import Memoir from "./memoir";

const Memoirs = (props) => {
  const { memoirs } = props;

  return (
    <Container maxW={"auto"}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {memoirs.map((memoir) => {
          return (
            <Memoir
              key={memoir.id}
              image={memoir.image}
              content={memoir.content}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Memoirs;
