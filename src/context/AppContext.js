import { createContext } from "react";

export const AppContext = createContext();

export const appReducer = (state, action) => {
  switch (action.type) {
    case "createList":
      return { ...state, showList: action.payload };
    case "setSelectedItem":
      return { ...state, selectedItem: action.payload };
    case "addItem":
      const showList = state.showList;
      showList.push(action.payload);
      return { ...state, showList };

    default:
      return state;
  }
};

export const initialState = {
  showList: new Array(),
  selectedItem: null,
};
