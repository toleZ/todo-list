import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { TaskListContext } from '../../context/TaskListContext.jsx'

const AddButton = ({ task, onAdd }) => {
  const {addTask} = useContext(TaskListContext)
  
  return (
    <Button
      size="xs"
      bg="gray.600"
      _hover={{ background: "gray.800" }}
      onClick={() => (addTask(task), onAdd())}
    >
      <AddIcon />
    </Button>
  );
};

export default AddButton;
