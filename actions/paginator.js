import { PAGE_NEXT, PAGE_PREV } from "../src/constants";

function next(pageNumber) {
    return {
        type: PAGE_NEXT,
        pageNumber
    };
};

function prev(pageNumber) {
    return {
        type: PAGE_PREV,
        pageNumber
    };
}

export { next, prev };