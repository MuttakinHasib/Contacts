import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./types";

export const login = () => async dispatch => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: true });
  } catch (err) {}
};
