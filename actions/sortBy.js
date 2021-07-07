import { SORT_ISSUES } from "../src/constants";

function sortBy(param) {
    return {
        type: SORT_ISSUES,
        param
    };
}

export { sortBy };