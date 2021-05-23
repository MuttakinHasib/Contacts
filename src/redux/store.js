import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer,persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";

const middleware = [thunk];
const initial = {};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducers = persistReducer(persistConfig, rootReducers);

export const store = createStore(
  reducers,
  initial,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persist = persistStore(store)