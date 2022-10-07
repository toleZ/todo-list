import { Container, Link, Text } from "@chakra-ui/react";
import TodoAddInput from "./components/TodoAddInput/TodoAddInput";
import TodoList from "./components/TodoList/TodoList";

import './App.css'

function App() {
  return (
    <Container bg="gray.700" textColor="white" maxW={"full"} h={"100vh"} p="5">
      <Text fontSize="4xl" align="center" fontFamily={'Lobster'}>
      · To Do List ·
      </Text>
      <TodoAddInput />
      <TodoList />
      <footer
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Text align='center'>
          Designed by
          <Link
            href="https://github.com/tolez"
            align="center"
            color="orange"
            p="1"
            isExternal
          >
            'tolez'
          </Link>
          - Front End Junior Developer 🧑‍💻
        </Text>
      </footer>
    </Container>
  );
}

export default App;
