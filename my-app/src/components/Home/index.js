import "./Home.css";
import { useCallback } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { MessageList } from "../MessageList";
import { Form } from "../Form";
import { ChatList } from "../ChatList";
import { sendMessageWithReply, sendMessage, deleteChat } from "../../store/chats/actions";
import { selectName } from "../../store/profile/selectors";

function Home() {
  const { chatId } = useParams();
  const history = useHistory();

  const chats = useSelector(state => state.chats);
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessage(chatId, {...newMessage, author: name}));
    },
    [chatId]
  );

  const handleDeleteChat = useCallback((id) => {
    dispatch(deleteChat(id));
  }, []);

  if (!!chatId && !chats[chatId]) {
    // return <Redirect to="/nochat" />
    history.replace('/nochat');
  }

  return (
    <div className="root">
      <ChatList chats={chats} onDeleteChat={handleDeleteChat} />
      {!!chatId && chats[chatId] && (
        <div>
          <MessageList messages={chats[chatId].messages} />
          <Form onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
}

export default Home;
