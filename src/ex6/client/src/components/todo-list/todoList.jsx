
import Item from "../todo-item/todoItem.jsx";
import React from "react";
import PropTypes from "prop-types";
import ItemClient from "../../services/item_client.js";
import { List} from "monday-ui-react-core";

const TodoList = ({setTodoList,items}) => {
  const itemClient = new ItemClient();

  const onDoneClick = async (id,status) => {
    const items=await itemClient.changeItemTodo(id,status);
    setTodoList(items);
  };

  const deleteTodo = async (id) => {
    await itemClient.deleteTodo(id);
    const itemsFilter=items.filter((item) => item.item_id!==id);
    setTodoList(itemsFilter);
  };

  return (
    <List>
      {items.map((item) => (
        <Item
          id = {item.item_id}
          text = {item.itemName}
          done = {item.status}
          deleteTodo={deleteTodo}
          onDoneClick={onDoneClick}
        />
      ))}
    </List>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.string,
  deleteTodo: PropTypes.func,
  onDoneClick: PropTypes.func,
  items:PropTypes.array,
  setTodoList:PropTypes.func,
};

export default TodoList;