import { fetchIssues } from "./issues";

function next(args) {
    return function (dispatch) {
        dispatch(fetchIssues(args));
    };
};

function prev(args) {
    return function (dispatch) {
        dispatch(fetchIssues(args));
    };
}

export { next, prev };