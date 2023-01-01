import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  // Reducers we don't care about persisting
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middlewares hit before the reducers
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composedEnchancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnchancers
);

export const persistor = persistStore(store);
