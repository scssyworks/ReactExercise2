import fetch from "cross-fetch";
import { UPDATE_ISSUES, DISABLE_CONTROLS } from "../src/constants";

function updateIssues(response) {
    return {
        type: UPDATE_ISSUES,
        response
    };
}

function fetchIssues({ user, repo, page }) {
    return async function (dispatch) {
        try {
            dispatch({
                type: DISABLE_CONTROLS
            });
            const raw = await fetch(`/issues/${user}/${repo}/${page}`);
            const response = await raw.json();
            dispatch(updateIssues(response));
        } catch (e) {
            console.error(e);
            dispatch({
                type: DISABLE_CONTROLS
            });
        }
    }
}

export { fetchIssues, updateIssues };