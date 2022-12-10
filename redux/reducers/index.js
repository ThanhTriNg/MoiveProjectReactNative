import { createStore, combineReducers } from "redux";
import { moviesReducer } from "./movieReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    movies : moviesReducer,
    users : userReducer,
})