import {Button} from "monday-ui-react-core";
import React from "react";
import PropTypes from "prop-types";
import "./footer.css";

const Footer = ({listTodo, todoListFilter, deleteListToDo}) => {

  const showButtonClearAll = () => {
    if (listTodo.length > 0){
      return (
        <Button type="button" size="small" className="footerButton" onClick={deleteListToDo}>Clear All</Button> 
      )
    } else return null;
  };

  return(
    <div className="footer">
      <h3 >You have {listTodo.length} pending tasks</h3>
      {(todoListFilter.length !== listTodo.length ) && <h3 >  and {todoListFilter.length} on filter</h3>}
      {showButtonClearAll()}
    </div>
  );
};

Footer.propTypes = {
  deleteListToDo: PropTypes.func,
  listTodo:PropTypes.array,
  todoListFilter:PropTypes.array,
};

export default Footer;

