import { AUTHORS } from "../../constants";
import { ADD_CHAT, SEND_MESSAGE, DELETE_CHAT } from "./actionTypes";

const initialState = {
  chat1: {
    messages: [{ text: "Dummy", author: AUTHORS.human, id: "chat1-1" }],
    name: "Chat 1",
    id: "chat1",
  },
  chat2: {
    name: "Chat 2",
    id: "chat2",
    messages: [
      { text: "this is chat 2", author: AUTHORS.human, id: "chat2-1" },
    ],
  },
  chat3: { name: "Chat 3", id: "chat3", messages: [] },
};

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT: {
      return {
        ...state,
        [payload.chatId]: {
          name: payload.name,
          id: payload.chatId,
          messages: [],
        },
      };
    }
    case DELETE_CHAT: {
      const newState = { ...state };
      delete newState[payload];

      return newState;
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        [payload.chatId]: {
          ...state[payload.chatId],
          messages: [...state[payload.chatId].messages, payload.message],
        },
      };
    }
    default:
      return state;
  }
};