import React from "react";
import { useSelector } from "react-redux";
import "./Container.css";
import ContainerHead from "./ContainerHead";

function Container() {
  const collapse = useSelector((state) => state.collapse);

  return (
    <>
      <div
        className={
          collapse === "OPEN" ? "task_Container" : "task_Container_expanded"
        }
      >
        <ContainerHead />
        <div className="all_Tasks">
          <div style={{ marginLeft: "15px", width: "2%" }}>
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="-1 -1 24 24"
              cursor="pointer"
            >
              <path
                d="M11.75 3a.75.75 0 0 1 .743.648l.007.102.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75Z"
                fill="black"
              />
            </svg>
          </div>
          <div style={{ marginLeft: "15px", width: "97%" }}>
            <input
              className="task_Input"
              type="text"
              placeholder="Add a task"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Container;
