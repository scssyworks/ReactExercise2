import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

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
    rootReducer,
    defaultState,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware
        )
    )
);

export default store;