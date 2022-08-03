import React from "react";
import { useDrag } from "react-dnd";
import { ListItem } from "@chakra-ui/react";

function Player({ item, playerType, onDropPlayer, index }) {
  // ------------------------------------------- Step # 1 for DND -------------------------------------------
  const [{ isDragging }, dragRef] = useDrag({
    type: playerType,
    item: () => ({ ...item, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // ----------------------------------------- // Step #  for DND -------------------------------------------

  return (
    <ListItem
      p="2"
      borderRadius="md"
      boxShadow="md"
      mb="2"
      textAlign="center"
      ref={dragRef}
      bg={
        isDragging
          ? playerType === "player"
            ? "yellow.600"
            : "teal.400"
          : "white"
      }
      color={isDragging ? "white" : "black"}
    >
      {item.name}
    </ListItem>
  );
}

export default Player;
