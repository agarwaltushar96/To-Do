import { collapse } from "../Type/collapseActionType";
import { changeTheme } from "../Type/themeActionType";

export const changeThemeAction = (type) => ({
  type: changeTheme,
  payload: type,
});

export const collapseMenu = (type) => ({
  type: collapse,
  payload: type,
});
