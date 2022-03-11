import { reducerActions } from "./reducer-actions";
import {
  getData,
  setData,
  removeData,
} from "../services/localStorage.service";
import { date } from "./date-values";
export const defaultListState = {
  items: JSON.parse(getData("todo")) || [],
};
export const listReducer = (prevState, action) => {
  if (action.type === reducerActions.ADD_ITEM) {
    const updatedList = prevState.items.concat(action.item);
    setData("todo", JSON.stringify(updatedList));
    return {
      items: updatedList,
    };
  }
  if (action.type === reducerActions.UPDATE_ITEM) {
    const currentList = JSON.parse(getData("todo"));
    const updatedList = currentList.map((obj) => {
      if (obj.title === action.item) {
        return { ...obj, isCompleted: !obj.isCompleted };
      }
      return obj;
    });
    removeData("todo");
    setData("todo", JSON.stringify(updatedList));
    return {
      items: updatedList,
    };
  }
  if (action.type === reducerActions.CLEAR_STORAGE) {
    const currentDate = date.toString();
    if (getData("currentDate")) {
      console.log("first");
      if (currentDate !== getData("currentDate")) {
        removeData("todo");
        setData("currentDate", currentDate);

        return { items: [] };
      }
    } else {
      setData("currentDate", currentDate);
    }
    return defaultListState;
  }

  return defaultListState;
};
