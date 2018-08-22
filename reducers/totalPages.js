import { UPDATE_TOTAL_PAGES } from "../src/constants";

function totalPages(state = 0, action) {
    switch (action.type) {
        case UPDATE_TOTAL_PAGES: return (action.totalPages >= 0 ? action.totalPages : state);
        default: return state;
    }
}

export default totalPages;