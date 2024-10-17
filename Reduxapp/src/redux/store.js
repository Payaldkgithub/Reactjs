import { legacy_createStore, combineReducers } from "redux";
import countReducer from "./reducers/countReducer";

const rootReducer = combineReducers({ countReducer })

const store = legacy_createStore(rootReducer)


export default store