import { UPDATE_USER, UPDATE_ISSUES, UPDATE_ISSUE_DETAILS } from "../src/constants";

function username(state = "", action) {
    switch (action.type) {
        case UPDATE_USER: return action.username;
        case UPDATE_ISSUES:
        case UPDATE_ISSUE_DETAILS:
            const { user } = action.response;
            return user;
        default: return state;
    }
}

export default username;