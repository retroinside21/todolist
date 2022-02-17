import { combineReducers } from "redux";
import { appReducer } from "./appReduce";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
    users : usersReducer,
    app   : appReducer
})