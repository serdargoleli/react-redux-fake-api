import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  postsReducer,
  usersReducer,
});

export default reducers;
