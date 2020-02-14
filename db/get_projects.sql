SELECT p.project_title, p.project_languages, u.username, u.profile_pic
FROM codemates_projects p
JOIN codemates_users u on p.user_id = u.user_id
order by p.project_id DESC