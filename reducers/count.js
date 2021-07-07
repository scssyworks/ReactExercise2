import { UPDATE_ISSUES } from "../src/constants";

function count(state = 0, { type, response }) {
    switch (type) {
        case UPDATE_ISSUES: return response.total;
        default: return state;
    }
}

export default count;