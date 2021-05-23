import {
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
} from "./types";

export const createContact = contactData => async dispatch => {
  console.log(contactData);
  try {
    dispatch({ type: CREATE_CONTACT_REQUEST });
    dispatch({ type: CREATE_CONTACT_SUCCESS, payload: contactData });
  } catch (err) {
    console.log(err);
    dispatch({ type: CREATE_CONTACT_FAIL, payload: err });
  }
};
