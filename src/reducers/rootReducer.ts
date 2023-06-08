import { combineReducers } from "redux";
import pageReducer from "./reducers/pageReducer";
import authReducer from "./reducers/authReducer";

export const rootReducer = combineReducers({
    page: pageReducer,
    auth: authReducer
});