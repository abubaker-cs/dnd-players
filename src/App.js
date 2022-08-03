import { Container, Stack, Flex, List, Heading } from "@chakra-ui/react";
import { React, useState } from "react";
import { useDrop } from "react-dnd";
import Player from "./components/Player";

function App() {
  //  Data for the Players
  const [players, setPlayer] = useState([
    { name: "functionality" },
    { name: "realiblity" },
    { name: "usability" },
    { name: "urgent" },
    { name: "support" },
    { name: "bugs" },
    { name: "time" },
    { name: "experience" },
    { name: "issues" },
    { name: "request" },
    { name: "question" },
    { name: "performance" },
    { name: "technical" },
    { name: "place" },
  ]);

  // Data for the Team
  const [team, setTeam] = useState([]);

  // ------------------------------------------- Step # 1 for DND -------------------------------------------
  const [{ isOver }, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  console.log(isOver);
  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const movePlayerToTeam = (item) => {
    console.log("movePlayerToTeam", item);
    setPlayer((prev) => prev.filter((_, i) => item.index !== i));
    setTeam((prev) => [...prev, item]);
  };

  const removePlayerFromTeam = (item) => {
    console.log("removePlayerFromTeam", item);
    setTeam((prev) => prev.filter((_, i) => item.index !== i));
    setPlayer((prev) => [...prev, item]);
  };

  // ----------------------------------------- // Step #  for DND -------------------------------------------
  return (
    <Container maxW="800px">
      <Heading p="3" mt="5" align="center" color="pink.500">
        Prototype based on React DnD
      </Heading>
      <Flex justify="space-between" height="90vh" align="center">
        <Stack width="300px">
          <Heading fontSize="2xl" color="blue.800" textAlign="center">
            Classify your lables
          </Heading>
          <List
            bgGradient={
              isPlayerOver
                ? "linear(to-b, blue.300, blue.500)"
                : "linear(to-b, blue.100, blue.200)"
            }
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
                playerType="player"
                index={i}
                onDropPlayer={movePlayerToTeam}
              />
            ))}
          </List>
        </Stack>
        <Stack width="300px">
          <Heading fontSize="2xl" color="purple.800" textAlign="center">
            Selected Classifications
          </Heading>
          <List
            bgGradient={
              isOver
                ? "linear(to-b, purple.300, purple.500)"
                : "linear(to-b, purple.100, purple.200)"
            }
            p="4"
            minH="70vh"
            boxShadow="xl"
            borderRadius="md"
            ref={addToTeamRef}
          >
            {team.map((e, i) => (
              <Player
                key={e.name}
                item={e}
                playerType="team"
                index={i}
                onDropPlayer={removePlayerFromTeam}
              />
            ))}
          </List>
        </Stack>
      </Flex>
    </Container>
  );
}

export default App;
