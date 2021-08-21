import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat } from "../../store/chats/actions";
import { useInput } from "../../utils/useInput";

export const AddChat = ({ onAddChat }) => {
  const dispatch = useDispatch();

  const { value, handleChange, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    const newId = `chat-${Date.now()}`;
    onAddChat(newId, value);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} />
    </form>
  );
};
