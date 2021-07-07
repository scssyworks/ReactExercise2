import { UPDATE_ISSUE_DETAILS, DISABLE_CONTROLS } from "../src/constants";
import fetch from "cross-fetch";

function updateIssueDetail(response) {
    return {
        type: UPDATE_ISSUE_DETAILS,
        response
    };
}

function fetchIssueDetail({ user, repo, issueId }) {
    return async function (dispatch) {
        try {
            dispatch({
                type: DISABLE_CONTROLS
            });
            const rawData = await fetch(`/issues/detail/${user}/${repo}/${issueId}`);
            const response = await rawData.json();
            dispatch(updateIssueDetail(response));
        } catch (e) {
            console.error(e);
            dispatch({
                type: DISABLE_CONTROLS
            });
        }
    }
}

export { fetchIssueDetail };