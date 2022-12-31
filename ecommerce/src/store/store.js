import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// Middlewares hit before the reducers
const middleWares = [logger];

const composedEnchancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnchancers);
