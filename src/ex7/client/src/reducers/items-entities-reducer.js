import actionTypes from "../actions/constants";

const initialState = {listTodo :[], loader: false};

const itemsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_TODOLIST:
      state.listTodo = action.listTodo;
      break;
    case actionTypes.ADD_TODO:
      state.listTodo.push(action.item)
      break;
    case actionTypes.DELETE_TODO:
      const deleteIndex = state.listTodo.findIndex(item => action.item.id === item.id);
      state.listTodo.splice(deleteIndex, 1)
      break;
    case actionTypes.EDIT_TODO:
      const editedIndex = state.listTodo.findIndex(item => action.item.id === item.id);
      state.listTodo[editedIndex] = action.item;
      break;

    default:
      return state;
  }

  return state;
};

export default itemsEntitiesReducer;

