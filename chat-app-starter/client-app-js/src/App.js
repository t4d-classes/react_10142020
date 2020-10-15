import React, { useState, useCallback } from "react";

import { useChatAppStore } from "./useChatAppStore";

import "./App.css";

export function App() {
  const { messages, sendMessage } = useChatAppStore();

  const [messageInput, setMessageInput] = useState("");

  const submitMessageForm = useCallback(
    function submitMessageForm(e) {
      e.preventDefault();
      sendMessage(messageInput);
      setMessageInput("");
    },
    [sendMessage, messageInput]
  );

  return (
    <>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
      <form onSubmit={submitMessageForm}>
        <input
          autoComplete="off"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button>Send</button>
      </form>
    </>
  );
}
