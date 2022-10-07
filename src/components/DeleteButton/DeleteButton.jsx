import { DeleteIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { TaskListContext } from "../../context/TaskListContext";

const DeleteButton = ({ task }) => {
  const { deleteTask } = useContext(TaskListContext);

  return (
    <Button
      onClick={() => deleteTask(task)}
      position="absolute"
      right="0"
      size="xs"
      bg="gray.600"
      _hover={{ background: "gray.800" }}
    >
      <DeleteIcon />
    </Button>
  );
};

export default DeleteButton;
