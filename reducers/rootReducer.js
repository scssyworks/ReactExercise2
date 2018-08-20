import { combineReducers } from "redux";
import issues from "./issues";
import comments from "./comments";
import count from "./count";
import isFetched from "./isFetched";
import repository from "./repository";
import username from "./username";

const rootReducer = combineReducers({
    issues,
    comments,
    count,
    repository,
    username,
    isFetched
});

export default rootReducer;