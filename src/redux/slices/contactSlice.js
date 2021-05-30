import { createSlice } from "@reduxjs/toolkit";

const contactReducer = createSlice({
  name: "auth",
  initialState: {
    loading: true,
    contacts: [],
  },
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push(payload);
      state.loading = false;
    },
    deleteContact: ({ contacts }, { payload }) => {
      const index = contacts.find(contact => contact.id === payload.id);
      contacts.splice(index, 1);
    },
    resetContact: (state, action) => ({
      loading: false,
      contacts: [],
    }),
  },
});

export const { createContact, deleteContact, resetContact } =
  contactReducer.actions;

export default contactReducer.reducer;
