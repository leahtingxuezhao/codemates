-- Create table codemates_users

DROP TABLE IF EXISTS codemates_users;
CREATE TABLE codemates_users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(500) not NULL,
    email VARCHAR(500) not NULL,
    hash VARCHAR(500) not NULL,
    profile_pic VARCHAR(1000)
);

SELECT * FROM codemates_users

-- Create table codemates_posts

DROP TABLE IF EXISTS codemates_posts;
CREATE TABLE codemates_posts
(post_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES codemates_users(user_id),
post_title TEXT,
content TEXT,
post_image TEXT);

SELECT * FROM codemates_posts;

-- Create table codemates_projects

DROP TABLE IF EXISTS codemates_projects;
CREATE TABLE codemates_projects
(project_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES codemates_users(user_id),
project_title TEXT,
project_description TEXT,
project_languages TEXT);

SELECT * FROM codemates_projects;

DROP TABLE IF EXISTS comments;
CREATE TABLE comments
(comment_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES codemates_users(user_id),
post_id INTEGER REFERENCES codemates_posts(post_id),
comment TEXT)

CREATE TABLE chatrooms (
    chatroom_id SERIAL PRIMARY KEY
);

CREATE TABLE chat_junc (
    chat_junc_id SERIAL PRIMARY KEY,
    chatroom_id INT REFERENCES chatrooms(chatroom_id),
    user_id INT REFERENCES codemates_users(user_id)
);

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    chatroom_id INT REFERENCES chatrooms(chatroom_id),
    user_id INT REFERENCES codemates_users(user_id),
    message VARCHAR(500),
    username VARCHAR(500) 
)