module.exports = {
  createPost: (req, res) => {
    const db = req.app.get("db");
    const user_id = req.session.user.user_id;
    const { post_title, content, post_image } = req.body;
    db.create_post(user_id, post_title, content, post_image).then(() =>
      res.sendStatus(200)
    );
  },

  createComment: (req, res) => {
    const db = req.app.get("db");
    const { user_id, post_id, comment } = req.body;
    db.create_comment(user_id, post_id, comment).then(() =>
      res.sendStatus(200)
    );
  },

  getPost: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.get_post(id).then(response => {
      const data = response[0];
      res.status(200).send(data);
    });
  },

  getComments: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.get_comments(Number(id))
      .then(results => {
        res.status(200).send(results);
      })
      .catch(err => res.status(500).send(err));
  },

  getPosts: (req, res) => {
    const db = req.app.get("db");
    db.get_posts()
      .then(results => {
        res.status(200).send(results);
      })
      .catch(err => res.status(500).send(err));
  },

  deletePost: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_post(Number(id)).then(data => res.sendStatus(200));
  },
  updatePost: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { post_title, content, post_image } = req.body;

    db.update_post(id, post_title, content, post_image).then(() =>
      res.sendStatus(200)
    );
  }
};
