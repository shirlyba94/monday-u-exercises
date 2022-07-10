import React, { useState,useCallback } from "react";
import PropTypes from "prop-types";
import ItemClient from "../../services/item_client.js";
import { Button } from "monday-ui-react-core";
import "./todoAdd.css";

const TodoAdd = ({setTodoList,}) => {
    const [todoInput, setTodoInput] = useState('');
    const [loading, setLoading] = useState(false);
    const itemClient = new ItemClient();

    const onClick = useCallback((flag) => {
        setLoading(flag);
    }, [setLoading]);

    const handleChange = event => {
        setTodoInput(event.target.value);
    };

    const addTodo = async () => {
        if(todoInput=='') {
            alert("Please Enter new todo");
        }else {
            onClick(true);
            setTodoList(await itemClient.addTodo(todoInput));
            onClick(false);
            setTodoInput('');
        };
    };

    return (
        <div>
            <input  
                className="newToInput"
                type="text"
                value={todoInput}
                placeholder="Add your new todo"
                onChange={handleChange}>
            </input>
            <Button
                loading={loading}
                onClick={()=>addTodo()}>
                +
            </Button> 
        </div>
    );
};

TodoAdd.propTypes = {
    loading: PropTypes.bool,
    todoInput: PropTypes.string,
    addTodo: PropTypes.func,
    setTodoList:PropTypes.func,
    handleChange:PropTypes.func,
};

export default TodoAdd;
