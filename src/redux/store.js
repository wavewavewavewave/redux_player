import {playerReducer} from "./reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    player: playerReducer,
})
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)