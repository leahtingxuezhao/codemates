module.exports = {
  createProject: (req, res) => {
    console.log(" hit create post");
    const db = req.app.get("db");
    const user_id = req.session.user.user_id;
    const { project_title, project_description, project_languages } = req.body;

    db.create_project(
      user_id,
      project_title,
      project_description,
      project_languages
    ).then(() => res.sendStatus(200));
  }
};
