SELECT cj.chatroom_id FROM chat_junc cj
JOIN chat_junc cjj
ON cjj.chatroom_id = cj.chatroom_id
WHERE cj.user_id = $1
AND cjj.user_id = $2;