import React, { useContext } from "react";
import { usePrev } from "../../utils";
import { ThemeContext } from "../../utils/ThemeContext";
import { useSelector } from "react-redux";
import { selectName } from "../../store/profile/selectors";
import { AUTHORS } from "../../constants";

export const MessageDef = ({ text, author, theme }) => {
  const name = useSelector(selectName);
  return (
    <div style={{ backgroundColor: theme.theme }}>
      {author === AUTHORS.human ? name : author}: {text}
    </div>
  );
};

export const withThemeContext = (Component) => {
  return (props) => {
    const theme = useContext(ThemeContext);
    return <Component {...props} theme={theme} />;
  };
};

export const Message = withThemeContext(MessageDef);