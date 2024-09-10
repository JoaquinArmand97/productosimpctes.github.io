import { Box } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box fontSize={"40px"} display={"flex"} alignItems={"center"} width={"100vw"} height={"10vh"} justifyContent={"center" }>
      {greeting}
    </Box>
  );
}

export default ItemListContainer;
