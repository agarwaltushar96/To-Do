import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeAction } from "../Actions/Action/action";

import "./Header.css";

function Header() {
  const themeChange = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(false);
  const [themeProp, setThemeProp] = useState({
    backgroundColor: "#79b5ff",
    color: "black",
  });

  useEffect(() => {
    const toggle = document.getElementById("toggleButton");
    if (toggle.className === "fa fa-toggle-off")
      toggle.className = "fa fa-toggle-on";
    else toggle.className = "fa fa-toggle-off";
    if (theme === false) {
      setThemeProp({
        backgroundColor: "#79b5ff",
        color: "black",
      });
    } else {
      setThemeProp({
        backgroundColor: "#3a5b83",
        color: "white",
      });
    }
  }, [theme]);

  return (
    <>
      <div className="header_box" style={themeProp}>
        <div className="name">To-Do</div>
        <div className="search_Task">
          <i className="fa fa-search"></i>
          <input className="search_Task_Input" type="text" />
          <i className="fa fa-times"></i>
        </div>
        <div className="theme_Toggle">
          <div className="light_mode">Light Mode</div>
          <i
            className="fa fa-toggle-off"
            onClick={() => {
              if (themeChange === "DARK") dispatch(changeThemeAction("LIGHT"));
              else dispatch(changeThemeAction("DARK"));
              setTheme((old) => !old);
            }}
            id="toggleButton"
          ></i>
          <div className="dark_mode">Dark Mode</div>
        </div>
      </div>
    </>
  );
}
export default Header;
