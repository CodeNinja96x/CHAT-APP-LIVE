import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const ChatPages = () => {
  const [chat, setChats] = useState([]);
  const fetChats = async () => {
    const response = await axios.get("/api/chats");
    setChats(response.data);
  };
  useEffect(() => {
    fetChats();
  }, []);
  return chat.length !== 0 ? (
    <div>
      {chat.map((chat) => (
        <div key={chat.id}> {chat.chatName}</div>
      ))}
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default ChatPages;
