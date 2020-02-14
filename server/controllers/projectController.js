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
  },
  getProject: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.get_project(id).then(response => {
      const data = response[0];
      res.status(200).send(data);
    });
  },

  getProjects: (req, res) => {
    const db = req.app.get("db");
    db.get_projects()
      .then(results => {
        res.status(200).send(results);
      })
      .catch(err => res.status(500).send(err));
  }
};
