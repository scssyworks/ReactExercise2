import fetch from "cross-fetch";
import { UPDATE_ISSUES, UPDATE_COUNT, UPDATE_FETCHED_STATUS } from "../src/constants";
import { updateUser, updateRepository } from "./repoForm";

function updateIssues(list) {
    return {
        type: UPDATE_ISSUES,
        list
    };
}

function updateCount(count) {
    return {
        type: UPDATE_COUNT,
        count
    };
}

function updateFetchedStatus(status) {
    return {
        type: UPDATE_FETCHED_STATUS,
        status
    };
}

function fetchIssues({ user, repo, page }) {
    return async function (dispatch) {
        try {
            dispatch(updateFetchedStatus(false));
            const raw = await fetch(`/issues/${user}/${repo}/${page}`);
            const response = await raw.json();
            dispatch(updateFetchedStatus(true));
            dispatch(updateIssues(response.list));
            dispatch(updateCount(response.total));
            dispatch(updateUser(response.user));
            dispatch(updateRepository(response.repository));
        } catch (e) {
            dispatch(updateFetchedStatus(false));
        }
    }
}

export { fetchIssues, updateIssues, updateCount, updateFetchedStatus };