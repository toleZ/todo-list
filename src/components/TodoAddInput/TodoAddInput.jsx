import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import AddButton from "../AddButton/AddButton";

const TodoAddInput = () => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const onAdd = () => {
    setTask("");
  };

  return (
    <InputGroup>
      <InputLeftElement children={<AddButton task={task} onAdd={onAdd} />} />
      <Input
        placeholder="Type your to-do task"
        value={task}
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default TodoAddInput;
