import { combineReducers } from "redux";
import { userLoginReducer } from "./authReducers";


export default combineReducers({
  userLogin: userLoginReducer,
});
