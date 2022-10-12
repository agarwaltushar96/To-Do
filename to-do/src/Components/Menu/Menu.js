import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { collapseMenu } from "../Actions/Action/action";
import "./Menu.css";

function Menu() {
  const collapse = useSelector((state) => state.collapse);
  const dispatch = useDispatch();

  function close() {
    if (collapse === "CLOSE") dispatch(collapseMenu("OPEN"));
    else dispatch(collapseMenu("CLOSE"));
  }

  return (
    <>
      <div
        className={
          collapse === "OPEN" ? "menu_Container" : "menu_Container_collapsed"
        }
      >
        <div style={{ paddingLeft: "20px" }}>
          <div>
            <svg
              className="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0"
              fill="currentColor"
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              cursor="pointer"
              onClick={close}
            >
              <path
                d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h15a.5.5 0 000-1h-15z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
