import { ListItem, Checkbox, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import DeleteButton from "../DeleteButton/DeleteButton";

const TodoItem = ({ task }) => {
  const [checked, setChecked] = useState(false);

  const handleChangeCkbx = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  return (
    <ListItem p="2" _hover={{ background: "gray.600", borderRadius: 'base'}}>
      <Flex alignItems='center' position='relative'>
        <Checkbox px="1" value={task} onChange={handleChangeCkbx} />
        <Text as={checked ? "del" : ""}>{task}</Text>
        <DeleteButton task={task}/>
      </Flex>
    </ListItem>
  );
};

export default TodoItem;
