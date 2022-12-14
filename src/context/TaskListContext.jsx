import { Box, useToast } from "@chakra-ui/react";
import { createContext, useState } from "react";
import { WarningTwoIcon } from "@chakra-ui/icons";

export const TaskListContext = createContext();

const TaskListProvider = ({ children }) => {
  const toast = useToast();

  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    if(task.replace(/ /g,'') === '' || task === null){
      return(
        toast({
          title: "You can't add an empty task",
          position:'bottom-right',
          status: 'error',
          duration: '2000',
          isClosable: true
        })
      )
    }

    taskList.includes(task)
      ? toast({
        title: 'This task is already on the list',
        position:'bottom-right',
        status: 'error',
        duration: '2000',
        isClosable: true
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
