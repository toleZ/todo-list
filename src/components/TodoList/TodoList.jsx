import { List } from "@chakra-ui/react";
import { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { TaskListContext } from "../../context/TaskListContext";
import TodoItem from "../TodoItem/TodoItem.jsx";
import './TodoList.css'

const TodoList = () => {
  const { taskList } = useContext(TaskListContext);
  return (
    <TransitionGroup component={List} p={'4'}>
      {taskList.map((task) => (
        <CSSTransition key={task} timeout={300} classNames='item'>
          <TodoItem task={task} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TodoList;
