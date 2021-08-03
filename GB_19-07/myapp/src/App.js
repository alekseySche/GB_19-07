import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

import "./App.css";
import { useRef, useEffect, useState, useCallback } from "react";
import { Message } from "./components/Message";
import { MessageList } from "./components/MessageList";
import { Form } from "./components/Form";
import { AUTHORS } from "./constants";

function App() {
  const [messages, setMessages] = useState([
    { text: "Dummy", author: AUTHORS.human, id: 1 },
  ]);

  const handleSendMessage = useCallback(
    (newMessage) => {
      setMessages([...messages, newMessage]);
    },
    [messages]
  );

  useEffect(() => {
    if (
      !messages.length ||
      messages[messages.length - 1].author === AUTHORS.robot
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "I am a robot",
        author: AUTHORS.robot,
        id: Date.now(),
      };

      setMessages([...messages, newMessage]);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div>
      <MessageList messages={messages} />
      <Form onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;