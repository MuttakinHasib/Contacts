import { combineReducers } from "redux";
import authReducer from "./slices/authSlice";
import contactReducer  from "./slices/contactSlice";

export default combineReducers({
  auth: authReducer,
  contactList: contactReducer,
});
