import { combineReducers, createStore } from "@reduxjs/toolkit";
import { CollapseReducer } from "../Reducers/CollapseReducer";
import { ThemeReducer } from "../Reducers/ThemeReducer";

const rootReducer = combineReducers({
  theme: ThemeReducer,
  collapse: CollapseReducer,
});
export const store = createStore(rootReducer);
