import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    loading: true,
    user: null,
  },
  reducers: {
    login: (state, action) => ({
      ...state,
      loading: false,
      user: true,
    }),
    register: (state, action) => {},
    logout: (state, action) => {
      AsyncStorage.removeItem("persist:root");
      return {
        ...state,
        loading: false,
        user: null,
      };
    },
  },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
