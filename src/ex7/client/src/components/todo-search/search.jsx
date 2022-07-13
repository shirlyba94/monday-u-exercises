import React, { useState,useCallback } from "react";
import PropTypes from "prop-types";
import { Button } from "monday-ui-react-core";
import "./search.css";

const Search = ({filterName}) => {
    const [todoSearch, setTodoSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const onClick = useCallback((flag) => {
        setLoading(flag);
    }, [setLoading]);

    const handleChange = event => {
        setTodoSearch(event.target.value);
    };

    const searchTodo = async () => {
        if(todoSearch==='') {
            alert("Please Enter");
        }else {
            onClick(true);
            filterName(todoSearch);
            onClick(false);
            setTodoSearch('');
        };
    };

    return (
        <div>
            <input  
                className="newToSearch"
                type="text"
                value={todoSearch}
                placeholder="Search.."
                onChange={handleChange}>
            </input>
            <Button
                size="small"
                loading={loading}
                onClick={searchTodo}>
                🔍
            </Button> 
        </div>
    );
};

Search.propTypes = {
    filterName:PropTypes.func,
};

export default Search;
