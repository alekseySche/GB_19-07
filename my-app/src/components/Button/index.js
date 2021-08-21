import React from "react";
import "./styles.css";

export const Button = (props) => {
  return <div className="button" onClick={props.onClick}>{props.children()}</div>;
};
