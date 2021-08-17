import { takeEvery, put, delay } from "redux-saga/effects";
import { SEND_MESSAGE } from "./actionTypes";
import { AUTHORS } from "../../constants";
import { sendMessage } from "./actions";

function* onSendMessage(action) {
if (action.payload.message.author !== AUTHORS.robot) {
    console.log("----------", action.payload.message.author);
    
    yield delay(1000);

    yield put(
    sendMessage(action.payload.chatId, {
        text: "message from saga",
        author: AUTHORS.robot,
        id: Date.now(),
    })
    );
}
}

export function* chatsSaga() {
yield takeEvery(SEND_MESSAGE, onSendMessage);
}