import { UPDATE_ISSUES } from "../src/constants";

function totalPages(state = 0, { type, response }) {
    switch (type) {
        case UPDATE_ISSUES:
            const totalPages = +response.pages;
            return (totalPages >= 0 ? totalPages : state);
        default: return state;
    }
}

export default totalPages;