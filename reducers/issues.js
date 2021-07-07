import { UPDATE_ISSUES } from "../src/constants";

function issues(state = [], { type, response }) {
    switch (type) {
        case UPDATE_ISSUES:
            return [...response.list];
        default:
            return state;
    }
}

export default issues;