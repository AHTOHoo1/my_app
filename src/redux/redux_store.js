import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth_reducer";
import dialogsReducer from "./dialogs_reducer";
import navbarReducer from "./navbar_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer

});

let state = createStore(reducers, applyMiddleware(thunkMiddleware));

export default state;
