import { SUBMIT_SEARCH } from "../src/constants";

function searchSubmit() {
    return {
        type: SUBMIT_SEARCH
    };
}

export { searchSubmit };