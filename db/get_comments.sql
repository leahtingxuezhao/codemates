SELECT u.username,u.profile_pic,m.comment, m.user_id
FROM comments m
JOIN codemates_users u on m.user_id = u.user_id
WHERE m.post_id = $1
ORDER BY m.comment_id DESC
