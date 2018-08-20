import { UPDATE_USER } from "../src/constants";

function username(state = "", action) {
    switch (action.type) {
        case UPDATE_USER: return action.username;
        default: return state;
    }
}

export default username;