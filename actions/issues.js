import fetch from "cross-fetch";
import { UPDATE_ISSUES } from "../src/constants";

function updateIssues(response) {
    return {
        type: UPDATE_ISSUES,
        response
    };
}

function fetchIssues(user, repo, page) {
    return async function (dispatch) {
        try {
            const raw = await fetch(`/issues/${user}/${repo}/${page}`);
            const response = await raw.json();
            dispatch(updateIssues(response));
        } catch (e) {
            dispatch(updateIssues({}));
        }
    }
}

export { updateIssues, fetchIssues };