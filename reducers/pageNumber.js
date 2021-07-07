import { UPDATE_ISSUES } from "../src/constants";

function pageNumber(state = 1, { type, response }) {
    switch (type) {
        case UPDATE_ISSUES:
            const currentPage = +response.currentPage;
            return (currentPage > 0 ? currentPage : state);
        default: return state;
    }
}

export default pageNumber;