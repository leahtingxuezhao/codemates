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
content TEXT);

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