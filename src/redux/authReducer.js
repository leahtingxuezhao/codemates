import axios from "axios";
import actionTypes from "./actionTypes";
const initialState = {
  user: {
    user_id: "",
    username: "",
    email: "",
    profile_pic: ""
  }
};

const { SET_USER, LOGOUT, GET_USER } = actionTypes;

export function setUser(payload) {
  return { type: SET_USER, payload };
}

export function logout() {
  axios
    .post("/auth/logout")
    .then(() => {
      return;
    })
    .catch(err => console.log(err));
  return {
    type: LOGOUT,
    payload: { user_id: "", username: "", email: "", profile_pic: "" }
  };
}

export function getUser() {
  const user = axios
    .get("/auth/user")
    .then(results => {
      return results.data;
    })
    .catch(err => console.log(err));
  return {
    type: GET_USER,
    payload: user
  };
}

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log("type", type);
  switch (type) {
    case GET_USER:
      return Object.assign({ ...state }, { user: payload });
    case SET_USER:
      return Object.assign({ ...state }, { posts: payload });
    case LOGOUT:
      return Object.assign({ ...state }, { posts: payload });
    default:
      return state;
  }
}
