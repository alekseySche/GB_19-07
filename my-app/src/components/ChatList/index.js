import React, { useContext } from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";
import { withThemeContext } from "../Message";
import { AddChat } from "./AddChat";
import { ChatItem } from "./ChatItem";

export const ChatList = ({ chats, theme, onDeleteChat, onAddChat }) => {
  return (
    <>
      <List>
        {Object.values(chats).map((c) => (
          <ChatItem
            name={c.name}
            key={c.id}
            id={c.id}
            onDelete={onDeleteChat}
          />
        ))}
        <ListItem>
          <AddChat onAddChat={onAddChat} />
        </ListItem>
      </List>
    </>
  );
};
