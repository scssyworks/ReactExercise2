import { UPDATE_ISSUES } from "../src/constants";

function isFetched(state = false, { type, newState }) {
    switch (type) {
        case UPDATE_ISSUES: return (typeof newState !== "boolean" || newState);
        default: return state;
    }
}

export default isFetched;