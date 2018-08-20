import { UPDATE_FETCHED_STATUS } from "../src/constants";

function isFetched(state = false, action) {
    switch (action.type) {
        case UPDATE_FETCHED_STATUS: return action.status;
        default: return state;
    }
}

export default isFetched;