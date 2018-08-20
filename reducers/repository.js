import { UPDATE_REPOSITORY } from "../src/constants";

function repository(state = "", action) {
    switch (action.type) {
        case UPDATE_REPOSITORY: return action.repository;
        default: return state;
    }
}

export default repository;