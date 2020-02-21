import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { withRouter } from "react-router-dom";
import "./Chat.css";

function Chat(props) {
  const [input, handleChange] = useState("");
  let [messages, updateMessages] = useState([]);
  let [chatroom_id, updateChatroomId] = useState(0);
  const socket = io.connect("http://localhost:3456");
  console.log("this is props.match", props.match);
  useEffect(() => {
    if (props.match.params.user_id) {
      socket.emit("join", {
        user_id2: props.match.params.user_id,
        user_id: props.match.params.user
      });
    }
    socket.on("login complete", body => {
      console.log(body);
      updateMessages((messages = [...body.chatroomMessages]));
      updateChatroomId((chatroom_id = body.chatroom_id));
    });
  }, []);
  useEffect(() => {
    socket.on("incoming", body => {
      console.log(body);
      updateMessages((messages = [body[0], ...messages]));
    });
  }, []);
  function messageToServer() {
    const { username, user } = props.match.params;
    socket.emit("message to server", {
      user_id: user,
      message: input,
      chatroom_id,
      username
    });
    handleChange("");
  }
  return (
    <div className="chat">
      <div className="messages" id="style-2">
        {messages.map(msg => (
          <div
            className={
              msg.user_id === props.match.params.user ? "sender" : "receiver"
            }
          >
            <h4>{msg.username}</h4>
            <span>{msg.message}</span>
          </div>
        ))}
      </div>
      <div className="message-area">
        <textarea
          className="message-input"
          value={input}
          onChange={e => handleChange(e.target.value)}
          label="message"
        />
        <button className="message-button" onClick={() => messageToServer()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default withRouter(Chat);
