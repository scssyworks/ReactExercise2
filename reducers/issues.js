import { UPDATE_ISSUES } from "../src/constants";

// Issues reducer responsible for updating state for github issues

function issues(state = [], action) {
    switch (action.type) {
        case UPDATE_ISSUES:
            return [...action.list];
        default:
            return state;
    }
}

export default issues;