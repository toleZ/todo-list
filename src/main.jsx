import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TaskListProvider from "./context/TaskListContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TaskListProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </TaskListProvider>
);
