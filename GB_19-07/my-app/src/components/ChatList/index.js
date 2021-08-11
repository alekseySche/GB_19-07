import React, { useContext } from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";
import { withThemeContext } from "../Message";
import { AddChat } from "./AddChat";

const Chats = ({ chats, theme }) => {
  return (
    <>
      <button onClick={theme.changeTheme}>CHANGE COLOR</button>
      <List>
        {Object.values(chats).map((c) => (
          <ListItem key={c.id}>
            <Link to={`/home/${c.id}`}>{c.name}</Link>
          </ListItem>
        ))}
        <ListItem>
          <AddChat />
        </ListItem>
      </List>
    </>
  );
};

export const ChatList = withThemeContext(Chats);
