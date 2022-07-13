import actionTypes from "../actions/constants";

const initialState = {
  showDone: true,
  searchInput: "",
  listFilter: "all",
};

const itemsViewReducer = (state = initialState, action) => {
  switch (action.type) {
     case actionTypes.SET_SEARCH_INPUT:
        return {
           showDone: true,
           searchInput: state.searchInput,
           listFilter: state.listFilter,
        };

     case actionTypes.SHOW_DONE:
        return {
            showDone: true,
            searchInput: state.searchInput,
            listFilter: state.listFilter,
        };

     case actionTypes.SHOW_NOT_DONE:
        return {
            showDone: false,
            searchInput: state.searchInput,
            listFilter: state.listFilter,
        };

     default:
        return state;
  };
};
export default itemsViewReducer;
