import actionsTypes from "./constants";

const setSearchInput = (text) => ({
    type: actionsTypes.SET_SEARCH_INPUT,
    payload: text,
});

const ShowTodoNotDone = () => ({
    type: actionsTypes.SHOW_DONE,
});

 const ShowTodoDone = () => ({
    type: actionsTypes.SHOW_NOT_DONE,
});
export const setSearchInputAction = (text) => {
    return (dispatch) => {
       dispatch(setSearchInput(text));
    };
};

export const ShowTodoNotDoneAction = () => {
    return (dispatch) => {
       dispatch(ShowTodoNotDone());
    };
};
 
export const ShowTodoDoneAction = () => {
    return (dispatch) => {
       dispatch(ShowTodoDone());
    };
};