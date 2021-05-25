import { combineReducers } from "redux";
import authSlice from "./slices/authSlice";
import contactSlice from "./slices/contactSlice";

export default combineReducers({
  auth: authSlice,
  contactList: contactSlice,
});
