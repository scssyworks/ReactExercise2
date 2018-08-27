import { UPDATE_ISSUES, UPDATE_ISSUE_DETAILS } from "../src/constants";

function message(state = "", { type, response }) {
    switch (type) {
        case UPDATE_ISSUES:
        case UPDATE_ISSUE_DETAILS:
            return response.message || "";
        default: return state;
    }
}

export default message;