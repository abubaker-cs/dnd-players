import { Container, Stack, Flex, List, Heading } from "@chakra-ui/react";
import { React, useState } from "react";
import { useDrop } from "react-dnd";
import Player from "./components/Player";

function App() {
  //  Data for the Players
  const [players, setPlayers] = useState([
    { name: "Player 1" },
    { name: "Player 2" },
    { name: "Player 3" },
    { name: "Player 4" },
    { name: "Player 5" },
  ]);

  // Data for the Team
  const [team, setTeam] = useState([]);

  // ------------------------------------------- Step # 1 for DND -------------------------------------------
  const [{ isOver }, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const movePlayerToTeam = (item) => {
    console.log("movePlayerToTeam", item);
  };

  const removePlayerFromTeam = (item) => {
    console.log("removePlayerFromTeam", item);
  };

  // ----------------------------------------- // Step #  for DND -------------------------------------------
  return (
    <Container maxW="800px">
      <Flex justify="space-between" height="90vh" align="center">
        <Stack width="300px">
          <Heading fontSize="3xl" color="yellow.800" textAlign="center">
            Players
          </Heading>
          <List
            p="4"
            minH="70vh"
            boxShadow="xl"
            borderRadius="md"
            ref={removeFromTeamRef}
          >
            {players.map((e, i) => (
              <Player
                key={e.name}
                item={e}
                type="player"
                index={i}
                onDropPlayer={movePlayerToTeam}
              />
            ))}
          </List>
        </Stack>
        <Stack width="300px">
          <Heading fontSize="3xl" color="teal.800" textAlign="center">
            Team
          </Heading>
          <List
            p="4"
            minH="70vh"
            boxShadow="xl"
            borderRadius="md"
            ref={addToTeamRef}
          ></List>
        </Stack>
      </Flex>
    </Container>
  );
}

export default App;
