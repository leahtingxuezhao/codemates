SELECT posts.post_title, u.username, u.pofile_pic
FROM codemates_posts posts
JOIN codemates_users u on posts.user_id = u.user_id
WHERE posts.post_id = $1;