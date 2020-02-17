SELECT c.post_id, c.post_title, u.username,u.profile_pic, u.user_id, c.content, c.post_image
FROM codemates_posts c
JOIN codemates_users u on c.user_id = u.user_id
order by c.post_id DESC