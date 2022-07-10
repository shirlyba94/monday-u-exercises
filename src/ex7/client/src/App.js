/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import TodoList from "./components/todo-list/todoList.jsx";
import TodoAdd from "./components/todo-add/todoAdd.jsx";
import TodoSearch from "./components/todo-search/search.jsx";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";
import ItemClient from "./services/list-api-service.js";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoListFilter, setTodoListFilter] = useState([]);
  const itemClient = new ItemClient();
 
  const getTodoList = async () => {
    try {
      itemClient.getTodo()
        .then((res) => {
          setTodoList(res);
          setTodoListFilter(res)
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTodoList();
    
  }, []);

  const addItemToTodoList = async (todoInput) => {
    let todoListAfterAdd=await itemClient.addTodo(todoInput);
    setTodoList(todoListAfterAdd);
    setTodoListFilter(todoListAfterAdd);
  };

  const filterStatus = async (status) => {
    setTodoListFilter(todoList.filter((item)=>item.status===status))
  };

  const filterName = async (name) => {
    setTodoListFilter(todoList.filter((item)=>item.itemName===name));
  };

  const showAllList = () => {
    setTodoListFilter(todoList);
  };

  const deleteListToDo = async () => {
    await itemClient.deleteAllTodo();
    setTodoList([]);
    setTodoListFilter([]);
  };

  const deleteItem = async (id) => {
    await itemClient.deleteTodo(id);
    const itemsFilter=todoList.filter((item) => item.id!==id);
    setTodoList(itemsFilter);
    setTodoListFilter(itemsFilter);
  };

  const doneClick = async (id,status) => {
    const items=await itemClient.changeItemTodo(id,status);
    setTodoList(items);
    setTodoListFilter(items);
  };

  return (
    <div className="background">
      <div className="todoApp">
        <Header
          filterStatus={filterStatus}
          showAllList={showAllList}
          listTodo={todoList}
        />
        <TodoAdd
          addItemToTodoList={addItemToTodoList}
        />
        {todoList && (<TodoSearch
          todoList={todoList}
          filterName={filterName}
        />
        )}
        {todoList && (
        <TodoList
          items={todoListFilter}
          doneClick={doneClick}
          deleteItem={deleteItem}
        />
        )}
        <Footer
          listTodo={todoList}
          deleteListToDo={deleteListToDo}
          todoListFilter={todoListFilter}
        />
      </div>
    </div>
  );
};

export default App;
