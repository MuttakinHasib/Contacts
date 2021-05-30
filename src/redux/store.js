import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import rootReducers from "./rootReducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["navigation"],
};

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    // for all keys defined in your persistConfig(s)
    Object.keys(state).forEach(key => {
      AsyncStorage.removeItem(`persist:${key}`);
    });
    state = undefined;
  }
  return rootReducers(state, action);
};

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ],
});

export const persist = persistStore(store);
