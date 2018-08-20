import { UPDATE_COUNT } from "../src/constants";

function count(state = 0, action) {
    switch (action.type) {
        case UPDATE_COUNT: return action.count;
        default: return state;
    }
}

export default count;