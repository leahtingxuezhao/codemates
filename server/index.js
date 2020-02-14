require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;
const authCtrl = require("./controllers/authController");
const postCtrl = require("./controllers/postController");
const projectCtrl = require("./controllers/projectController");

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
    console.log("Database connected");
    app.listen(SERVER_PORT, () =>
      console.log(`Server listening on ${SERVER_PORT}`)
    );
  })
  .catch(err => console.log(err));

//ENDPOINTS
//auth endpoints
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.post("/auth/logout", authCtrl.logout);
app.get("/auth/user", authCtrl.getUser);

//post endpoints
app.post("/api/create_post", postCtrl.createPost);
app.get("/api/get_posts", postCtrl.getPosts);
app.get("/api/get_post/:id", postCtrl.getPost);

//project endpoints
app.post("/api/create_project", projectCtrl.createProject);
app.get("/api/get_projects", projectCtrl.getProjects);
app.get("/api/get_project/:id", projectCtrl.getProject);
