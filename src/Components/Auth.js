import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/authReducer";
import authPic from "../image_folder/authPic.jpeg";
import welcome from "../image_folder/welcome.jpeg";
import registerImage from "../image_folder/registerImage.jpeg";
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      profile_pic: ""
    };
  }

  login = (username, password) => {
    axios
      .post("/auth/login", { username, password })
      .then(res => {
        console.log("res :", res);
        this.props.setUser(res.data);
        console.log("login this.props :", this.props);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  register = (username, email, password, profile_pic) => {
    console.log(
      "username, email, password, profile_pic :",
      username,
      email,
      password,
      profile_pic
    );
    axios
      .post("/auth/register", { username, email, password, profile_pic })
      .then(res => {
        console.log("register, res :", res);
        this.props.setUser(res.data);
        this.email(email);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
  email = email => {
    axios.post("/auth/email", { email }).catch(err => {
      console.log(err);
    });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("this.state.username :", this.state.username);
    console.log("this.state.password :", this.state.password);
    console.log("this.state.email :", this.state.email);
    console.log("this.state.profile_pic :", this.state.profile_pic);
    const { username, password, email, profile_pic } = this.state;
    const { push } = this.props.history;
    return (
      <div>
        <img src={authPic} alt="authPic"></img>
        <div className="auth-box">
          <div className="login-box">
            <p className="auth-title">WELCOME BACK!</p>
            <img src={welcome} alt="welcome" className="welcome"></img>
            <div className="auth-small-title">NAME :</div>
            <input
              name="username"
              placeholder="Username"
              onChange={e => this.handleChange(e)}
            ></input>
            <div className="auth-small-title">PASSWORD :</div>
            <input
              name="password"
              onChange={e => this.handleChange(e)}
              placeholder="Password"
            ></input>
            <button onClick={() => this.login(username, password)}>
              Log in
            </button>
          </div>
          <div className="register-box">
            <p className="auth-title">CREATE AN ACCOUNT :)</p>
            <img src={registerImage} alt="register" className="welcome"></img>
            <div className="auth-small-title">NAME :</div>
            <input
              name="username"
              placeholder="Username"
              onChange={e => this.handleChange(e)}
            ></input>
            <div className="auth-small-title">EMAIL ADDRESS :</div>
            <input
              name="email"
              placeholder="Email"
              onChange={e => this.handleChange(e)}
            ></input>
            <div className="auth-small-title">PASSWORD :</div>
            <input
              name="password"
              onChange={e => this.handleChange(e)}
              placeholder="Password"
            ></input>
            <div className="auth-small-title">PROFILE PICTURE :</div>
            <input
              name="profile_pic"
              placeholder="image"
              onChange={e => this.handleChange(e)}
            ></input>
            <button
              onClick={() =>
                this.register(username, email, password, profile_pic)
              }
            >
              Create new account
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setUser
};

export default connect(null, mapDispatchToProps)(Auth);
