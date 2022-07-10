import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from "../../images/delete_icon.svg"
import "./todoItem.css";

const TodoItem = ({done, onDoneClick, text, deleteTodo, id}) => {
  return (
    <div 
      className="todo">
      <input 
        className="listToDo"
        type='checkbox'
        checked={done}
        onChange={()=>onDoneClick(id,!done)}>
      </input>
      <span>
        {text}
      </span>
      <button
        className="delete"
        onClick={() => deleteTodo(id)}>
        <img src={DeleteIcon}/>
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  done: PropTypes.bool,
  id: PropTypes.number,
  deleteTodo: PropTypes.func,
  onDoneClick:PropTypes.func,
  text:PropTypes.string,
};

export default TodoItem;
