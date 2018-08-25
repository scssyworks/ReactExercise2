import { UPDATE_REPOSITORY, UPDATE_ISSUES } from "../src/constants";

function repository(state = "", action) {
    switch (action.type) {
        case UPDATE_REPOSITORY: return action.repository;
        case UPDATE_ISSUES:
            const { repository } = action.response;
            return repository;
        default: return state;
    }
}

export default repository;