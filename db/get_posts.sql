SELECT c.post_title, u.username,u.profile_pic
FROM codemates_posts c
JOIN codemates_users u on c.user_id = u.user_id
order by c.post_id DESC