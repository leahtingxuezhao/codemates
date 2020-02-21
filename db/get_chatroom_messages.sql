SELECT * FROM messages
WHERE chatroom_id = $1
ORDER BY message_id DESC;