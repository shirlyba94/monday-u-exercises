
import Item from "../todo-item/todoItem.jsx";
import React from "react";
import PropTypes from "prop-types";
import { List} from "monday-ui-react-core";

const TodoList = ({doneClick, items, deleteItem}) => {

  const onDoneClick = async (id,status) => {
    doneClick(id,status)
  };

  const deleteTodo = async (id) => {
    deleteItem(id)
  };

  return (
    <List>
      {items.map((item) => (
        <Item
          key = {item.id}
          id = {item.id}
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
  doneClick: PropTypes.func,
  deleteItem: PropTypes.func,
  items:PropTypes.array,
};

export default TodoList;