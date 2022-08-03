import React from "react";
import { useDrag } from "react-dnd";
import { ListItem } from "@chakra-ui/react";

function Player({ item, type, index, onDropPlayer }) {
  // ------------------------------------------- Step # 1 for DND -------------------------------------------
  const [{ isDraggble }, dragRef] = useDrag({
    type: type,
    item: () => ({ ...item, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult && item) {
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
    >
      {item.name}
    </ListItem>
  );
}

export default Player;
