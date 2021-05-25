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
    resetContact: (state,action) => ({
      loading: false,
      contacts: []
    })
  },
});

export const { createContact,resetContact } = contactReducer.actions;

export default contactReducer.reducer;
