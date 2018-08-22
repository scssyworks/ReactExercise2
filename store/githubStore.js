import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const history = createBrowserHistory();

const defaultState = {
    username: "",
    repository: "",
    isFetched: false,
    count: 0,
    pageNumber: 1,
    totalPages: 0,
    issues: [],
    comments: []
};

const store = createStore(
    connectRouter(history)(rootReducer),
    defaultState,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            routerMiddleware(history)
        )
    )
);

export default store;
export { history };