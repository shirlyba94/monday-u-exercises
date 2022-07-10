import React, { useState, useEffect } from "react";
import TodoList from "./components/todo-list/todoList.jsx";
import TodoAdd from "./components/todo-add/todoAdd.jsx";
import Footer from "./components/footer/footer.jsx";
import ItemClient from "./services/item_client.js";
import PropTypes from "prop-types";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const itemClient = new ItemClient();

  const getTodoList = async () => {
    try {
      itemClient.getTodo()
      .then((res) => {
        setTodoList(res);
      });

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTodoList();
    
  }, []);

  return (
    <div className="background">
    <div className="todoApp">
    <h1>Todo list</h1>
    <TodoAdd
      setTodoList={setTodoList}
    />
    {todoList && (
    <TodoList
      items={todoList}
      setTodoList={setTodoList}
    />
    )}
    <Footer
      listTodo={todoList}
      setTodoList={setTodoList}
    />
    </div>
    </div>
  );
};

App.propTypes = {
  todoList: PropTypes.string,
  setTodoList: PropTypes.func,
};

export default App;
