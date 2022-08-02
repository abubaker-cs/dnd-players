import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DndProvider>
  </React.StrictMode>
);
