import { combineReducers } from "redux";
import login from "./login/login-reducer";
import counter from "./counter/counterReducer";
import register from "./register/registerReducer";
import users from "./users/userReducer";

export default combineReducers({
    login,
    counter,
    register,
    users
});
