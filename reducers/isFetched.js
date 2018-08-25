import { UPDATE_ISSUES, DISABLE_CONTROLS, UPDATE_ISSUE_DETAILS } from "../src/constants";

function isFetched(state = false, { type, response }) {
    switch (type) {
        case UPDATE_ISSUES:
        case UPDATE_ISSUE_DETAILS:
            return response.success;
        case DISABLE_CONTROLS: return false;
        default: return state;
    }
}

export default isFetched;