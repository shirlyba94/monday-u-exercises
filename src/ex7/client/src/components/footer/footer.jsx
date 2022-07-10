
import React from "react";
import PropTypes from "prop-types";
import "./footer.css";
import ItemClient from "../../services/item_client.js";
import { Button} from "monday-ui-react-core";

const Footer = ({setTodoList,listTodo}) => {
  const itemClient = new ItemClient();

  const deleteListToDo = async () => {
      await itemClient.deleteAllTodo();
      setTodoList([]);
  };

  const showButtonClearAll = () => {
    if (listTodo.length > 0){
      return <Button type="button" onClick={()=> deleteListToDo()}>Clear All</Button> 
    } else return null;
  };

  return(
    <div>
      <h3 >You have {listTodo.length} pending tasks</h3>
      <div>{showButtonClearAll()}</div>
    </div>
  );
};

Footer.propTypes = {
  setTodoList: PropTypes.func,
  listTodo:PropTypes.array,
};

export default Footer;