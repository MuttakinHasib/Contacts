import { combineReducers } from "redux";
import { userLoginReducer } from "./authReducers";
import { createContactReducer } from "./contactReducers";

export default combineReducers({
  userLogin: userLoginReducer,
  contactList: createContactReducer,
});
