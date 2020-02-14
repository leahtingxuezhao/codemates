module.exports = {
  createPost: (req, res) => {
    const db = req.app.get("db");
    const user_id = req.session.user.user_id;
    const { post_title, content, post_image } = req.body;
    db.create_post(user_id, post_title, content, post_image).then(() =>
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

  getPosts: (req, res) => {
    const db = req.app.get("db");
    db.get_posts()
      .then(results => {
        res.status(200).send(results);
      })
      .catch(err => res.status(500).send(err));
  }
};
