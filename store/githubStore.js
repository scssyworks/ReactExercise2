import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const history = createBrowserHistory();

const defaultState = {
    username: "",
    repository: "",
    isFetched: false,
    count: 0,
    issues: [],
    comments: []
};

const store = createStore(
    connectRouter(history)(rootReducer),
    defaultState,
    compose(
        applyMiddleware(
            thunkMiddleware,
            routerMiddleware(history)
        )
    )
);

export default store;
export { history };