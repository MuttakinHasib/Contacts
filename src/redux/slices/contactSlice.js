import { createSlice } from "@reduxjs/toolkit";

const contactReducer = createSlice({
  name: "auth",
  initialState: {
    loading: true,
    contacts: [],
  },
  reducers: {
    createContact: (state, action) => ({
      ...state,
      loading: false,
      contacts: [...state.contacts, action.payload],
    }),
  },
});

export const { createContact } = contactReducer.actions;

export default contactReducer.reducer;
