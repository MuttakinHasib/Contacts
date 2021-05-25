import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { resetContact } from "./contactSlice";

const resetStorage = async () => await AsyncStorage.removeItem("persist:root");

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
      console.log(action.type);
      resetContact();
      resetStorage();
      return {
        loading: false,
        user: null,
      };
    },
  },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
