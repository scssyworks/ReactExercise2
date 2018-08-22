import { combineReducers } from "redux";
import issues from "./issues";
import comments from "./comments";
import count from "./count";
import isFetched from "./isFetched";
import repository from "./repository";
import username from "./username";
import pageNumber from "./pageNumber";
import totalPages from "./totalPages";

const rootReducer = combineReducers({
    issues,
    comments,
    count,
    repository,
    username,
    isFetched,
    pageNumber,
    totalPages
});

export default rootReducer;