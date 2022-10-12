import { collapse } from "../Actions/Type/collapseActionType";

export const CollapseReducer = (state = "OPEN", action) => {
  switch (action.type) {
    case collapse:
      return action.payload;
    default:
      return state;
  }
};
