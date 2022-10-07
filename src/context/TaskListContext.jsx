import { Box, useToast } from "@chakra-ui/react";
import { createContext, useState } from "react";
import { WarningTwoIcon } from "@chakra-ui/icons";

export const TaskListContext = createContext();

const TaskListProvider = ({ children }) => {
  const toast = useToast();

  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    taskList.includes(task)
      ? toast({
          position: "bottom-right",
          render: () => (
            <Box bgColor="red" color="white" p={3}>
              <WarningTwoIcon />
              This task is already on the list
            </Box>
          ),
        })
      : setTaskList([...taskList, task]);
  };

  const deleteTask = (task) => {
    const filteredList = taskList.filter((t) => t !== task);
    setTaskList(filteredList);
  };

  return (
    <TaskListContext.Provider value={{ taskList, addTask, deleteTask }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
