import { combineReducers } from "redux";
import { userReducer } from "./feedReducer";

const reducers = combineReducers({
	feed: userReducer,
});

export default reducers;
