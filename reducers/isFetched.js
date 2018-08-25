import { UPDATE_ISSUES, DISABLE_CONTROLS, UPDATE_ISSUE_DETAILS } from "../src/constants";

function isFetched(state = false, { type, newState }) {
    switch (type) {
        case UPDATE_ISSUES:
        case UPDATE_ISSUE_DETAILS:
            return (typeof newState !== "boolean" || newState);
        case DISABLE_CONTROLS: return false;
        default: return state;
    }
}

export default isFetched;