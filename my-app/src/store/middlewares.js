import { ADD_CHAT, SEND_MESSAGE } from "./chats/actionTypes";
import { addChat, sendMessage } from "./chats/actions";
import { AUTHORS } from "../constants";

export const middleware = (store) => (next) => (action) => {
console.log(action.type);

if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author !== AUTHORS.robot
) {
    setTimeout(() => {
    store.dispatch(
        sendMessage(action.payload.chatId, {
        text: "generated",
        author: AUTHORS.robot,
        })
    );
    }, 1000);
}

return next(action);
};