import React from "react";
import { ListItem } from "@chakra-ui/react";

function Player({ item }) {
  return (
    <ListItem p="2" borderRadius="md" boxShadow="md" mb="2" textAlign="center">
      {item.name}
    </ListItem>
  );
}

export default Player;
