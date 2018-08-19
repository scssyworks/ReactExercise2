import fetch from "cross-fetch";

function updateIssues(response) {
    return {
        type: "UPDATE_ISSUES",
        response
    };
}

function fetchIssues(user, repo, page) {
    return async function (dispatch) {
        const raw = await fetch(`/issues/${user}/${repo}/${page}`);
        const response = await raw.json();
        dispatch(updateIssues(response));
    }
}

export { updateIssues, fetchIssues };