import React, { useContext } from "react";
import { usePrev } from "../../utils";
import { ThemeContext } from "../../utils/ThemeContext";
import { useSelector } from "react-redux";
import { selectName } from "../../store/profile/selectors";
import { AUTHORS } from "../../constants";

export const Message = ({ text, author }) => {
  const name = useSelector(selectName);
  return (
    <div>
      {author === AUTHORS.human ? name : author}: {text}
    </div>
  );
};