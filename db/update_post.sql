UPDATE codemates_posts
SET post_title = $2, content = $3, post_image = $4
WHERE post_id = $1;