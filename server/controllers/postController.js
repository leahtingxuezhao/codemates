module.exports = {
  createPost: (req, res) => {
    const db = req.app.get("db");
    const user_id = req.session.user.user_id;
    const { post_title, content, post_image } = req.body;
    db.create_post(user_id, post_title, content, post_image).then(() =>
      res.sendStatus(200)
    );
  }
};
