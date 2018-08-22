import { UPDATE_PAGE_NUMBER } from "../src/constants";

function pageNumber(state = 1, action) {
    switch (action.type) {
        case UPDATE_PAGE_NUMBER: return (action.pageNumber > 0 ? action.pageNumber : state);
        default: return state;
    }
}

export default pageNumber;