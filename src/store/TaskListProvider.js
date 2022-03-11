import { useReducer } from "react";
import TaskListContext from "./taskList-context";
import { reducerActions } from "../utils/reducer-actions";
import { listReducer,defaultListState } from "../utils/reducers.js";

const TaskListProvider = (props) => {
  const [listState, dispatchListActiion] = useReducer(
    listReducer,
    defaultListState
  );

  const addItemToListHandler = (item) => {
    dispatchListActiion({ type: reducerActions.ADD_ITEM, item: item });
  };
  const updateItemHandler = (item) => {
    dispatchListActiion({ type: reducerActions.UPDATE_ITEM, item: item });
  };
  const removeItemHandler = () => {
    dispatchListActiion({ type: reducerActions.CLEAR_STORAGE });
  };
// console.log(listState)
  const listCtx = {
    items: listState.items,
    addItem: addItemToListHandler,
    updateItem: updateItemHandler,
    clearStorage: removeItemHandler,
  };

  return (
    <TaskListContext.Provider value={listCtx}>
      {props.children}
    </TaskListContext.Provider>
  );
};
export default TaskListProvider;
