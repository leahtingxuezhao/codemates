INSERT INTO messages (
    chatroom_id,
    user_id,
    message,
    username
) VALUES (
    $1, $2, $3, (SELECT username FROM codemates_users
    WHERE user_id = $2)
)
returning *;