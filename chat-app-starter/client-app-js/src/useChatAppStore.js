import { useState, useRef, useEffect, useCallback } from "react";
import io from "socket.io-client";

export const CHAT_MESSAGE = "chat message";

export function useChatAppStore() {
  const socketRef = useRef(null);

  const [messages, setMessages] = useState([]);

  const sendMessage = useCallback(
    function sendMessage(message) {
      if (!socketRef.current) return;
      socketRef.current.emit(CHAT_MESSAGE, message);
    },
    []
  );

  useEffect(function openSocket() {
    // componentDidMount
    // code runs when the component is added to the dom tree
    socketRef.current = io();

    return function closeSocket() {
      // componentWillUnmount
      // code runs when the component is removed from the dom tree
      socketRef.current.close();
      socketRef.current = null;
    };
  }, []); // empty array, run on the first render, no array, run on every render

  const receiveChatMessage = useCallback(
    function receiveChatMessage(message) {
      setMessages([
        ...messages,
        { content: message, id: Math.max(...messages.map((m) => m.id), 0) + 1 },
      ]);
    },
    [messages]
  );

  useEffect(
    // componentDidUpdate
    function registerReceiveMessage() {
      if (!socketRef.current) return;

      const lastReceiveChatMessage = receiveChatMessage;

      socketRef.current.on(CHAT_MESSAGE, lastReceiveChatMessage);

      // getSnapshotBeforeUpdate
      return function unregisterReceiveMessage() {
        if (!socketRef.current) return;

        socketRef.current.off(CHAT_MESSAGE, lastReceiveChatMessage);
      };
    },
    [receiveChatMessage]
  );

  return {
    messages,
    sendMessage,
  };
}
