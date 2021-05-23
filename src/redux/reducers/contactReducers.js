import {
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
} from "../actions/types";

export const createContactReducer = (
  state = { contacts: [], error: null },
  action
) => {
  switch (action.type) {
    case CREATE_CONTACT_REQUEST:
      return { loading: true };
    case CREATE_CONTACT_SUCCESS:
      return {
        loading: false,
        error: null,
        contacts: [...state.contacts, action.payload],
      };
    case CREATE_CONTACT_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
