import { combineReducers } from "redux";
import pageReducer from "./reducers/pageReducer";
import isAuthorizedReducer from "./reducers/isAuthorizedReducer";

export const rootReducer = combineReducers({
    page: pageReducer,
    isAuthorized: isAuthorizedReducer
});