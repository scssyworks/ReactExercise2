import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers/rootReducer";

const history = createBrowserHistory();

const defaultState = {
    issues: {},
    comments: []
};

const store = createStore(
    connectRouter(history)(rootReducer),
    defaultState,
    compose(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
);

export default store;
export { history };