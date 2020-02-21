SELECT * FROM chat_junc cj
JOIN codemates_users u ON u.user_id  = cj.user_id
WHERE cj.user_id = $1;