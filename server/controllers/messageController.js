module.exports = {
  async messageToServer(body, io, socket, db) {
    console.log(body);
    const { chatroom_id, user_id, message, username } = body;
    let newMessage = await db.create_message(
      chatroom_id,
      +user_id,
      message,
      username
    );
    console.log(newMessage);

    io.in(chatroom_id).emit("incoming", newMessage);
  },
  async joinRoom(body, io, socket, db) {
    const { chatroom_id, chatroomMessages } = body;
    socket.join(chatroom_id);
    io.in(chatroom_id).emit("login completed", {
      chatroomMessages,
      chatroom_id
    });
  },
  async checkForChatroom(body, io, socket, db) {
    console.log({ body });
    const { user_id, user_id2 } = body;
    console.log({ body });

    let [chatroom_id] = await db.check_chat_junc(user_id, user_id2);
    console.log(chatroom_id);
    if (!chatroom_id) {
      let [newChatroomId] = await db.create_chatroom();
      await db.create_chat_junc([+user_id, +newChatroomId.chatroom_id]);
      await db.create_chat_junc([+user_id2, +newChatroomId.chatroom_id]);
      await db.create_message(
        +newChatroomId.chatroom_id,
        +user_id,
        "message me",
        "codemates.co@gmail.com"
      );
      socket.join(newChatroomId);
      io.in(newChatroomId).emit("login complete", {
        chatroomMessages: [],
        newChatroomId
      });
    } else {
      let chatroomMessages = await db.get_chatroom_messages(
        +chatroom_id.chatroom_id
      );
      socket.join(+chatroom_id.chatroom_id);
      io.in(+chatroom_id.chatroom_id).emit("login complete", {
        chatroomMessages,
        chatroom_id: +chatroom_id.chatroom_id
      });
    }
  }
};
