import actionsTypes from "./constants";
import ItemClient from "../../server-api/item-client";
const itemClient = new ItemClient()

const getTodoList = () => ({
  type: actionsTypes.GET_TODOLIST
});

const addTodo = () => ({
  type: actionsTypes.ADD_TODO
});

const deleteTodo = () => ({
    type: actionsTypes.DELETE_TODO
});

const editTodo = () => ({
    type: actionsTypes.EDIT_TODO
});

export const getTodoListAction = () => {
    return async dispatch => {
        const data = await itemClient.getTodoList();
        dispatch(getTodoList(data));
    };
};

export const addTodoAction = (item) => {
    return async dispatch => {
      const addedTodo = await itemClient.addTodo(item);
      dispatch(addTodo(addedTodo));
    };
};
  
export const deleteTodoAction = (id) => {
    return async dispatch => {
        const deletedTodo = await itemClient.deleteTodo(id);
        dispatch(deleteTodo(deletedTodo));
    };
};
  
export const editTodoAction = (id, status) => {
    return async dispatch => {
        const editedTodo = await itemClient.editTodo(id, status);
        dispatch(editTodo(editedTodo));
    };
};