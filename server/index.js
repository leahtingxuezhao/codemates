require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;
const authCtrl = require("./controllers/authController");
const postCtrl = require("./controllers/postController");
const projectCtrl = require("./controllers/projectController");
const messageController = require("./controllers/messageController");

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 }
  })
);

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("db is ready");
    const io = require("socket.io")(
      app.listen(SERVER_PORT, () =>
        console.log(`server is listening on port: ${SERVER_PORT}`)
      )
    );
    io.on("connection", socket => {
      const db = app.get("db");
      socket.on("message to server", body =>
        messageController.messageToServer(body, io, socket, db, session)
      );
      socket.on("join", body =>
        messageController.checkForChatroom(body, io, socket, db, session)
      );
    });
  })
  .catch(err => console.log(err));

//ENDPOINTS
//auth endpoints
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.post("/auth/logout", authCtrl.logout);
app.get("/auth/user", authCtrl.getUser);
app.post("/auth/email", authCtrl.email);

//post endpoints
app.post("/api/create_post", postCtrl.createPost);
app.get("/api/get_posts", postCtrl.getPosts);
app.get("/api/get_post/:id", postCtrl.getPost);
app.delete("/api/delete_post/:id", postCtrl.deletePost);
app.post("/api/create_comment", postCtrl.createComment);
app.get("/api/get_comments/:id", postCtrl.getComments);
app.put("/api/update_post/:id", postCtrl.updatePost);

//project endpoints
app.post("/api/create_project", projectCtrl.createProject);
app.get("/api/get_projects", projectCtrl.getProjects);
app.get("/api/get_project/:id", projectCtrl.getProject);
app.delete("/api/delete_project/:id", projectCtrl.deleteProject);
