import { combineReducers } from "redux";
import issues from "./issues";
import count from "./count";
import isFetched from "./isFetched";
import repository from "./repository";
import username from "./username";
import pageNumber from "./pageNumber";
import totalPages from "./totalPages";
import issueDetail from "./issueDetail";
import message from "./message";

const rootReducer = combineReducers({
    issues,
    count,
    repository,
    username,
    isFetched,
    pageNumber,
    totalPages,
    issueDetail,
    message
});

export default rootReducer;