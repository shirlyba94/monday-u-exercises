import React, { useState,useCallback } from "react";
import PropTypes from "prop-types";
import { Button } from "monday-ui-react-core";
import "./todoAdd.css";

const TodoAdd = ({addItemToTodoList}) => {
    const [todoInput, setTodoInput] = useState('');
    const [loading, setLoading] = useState(false);

    const onClick = useCallback((flag) => {
        setLoading(flag);
    }, [setLoading]);

    const handleChange = event => {
        setTodoInput(event.target.value);
    };

    const addTodo = async () => {
        if(todoInput==='') {
            alert("Please Enter new todo");
        }else {
            onClick(true);
            addItemToTodoList(todoInput);
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
                size="small"
                loading={loading}
                onClick={addTodo}>
                ➕
            </Button> 
        </div>
    );
};

TodoAdd.propTypes = {
    addTodo: PropTypes.func,
};

export default TodoAdd;
