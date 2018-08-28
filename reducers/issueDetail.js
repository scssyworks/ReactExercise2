import { UPDATE_ISSUE_DETAILS } from "../src/constants";

function issueDetail(state = {}, { type, response }) {
    switch (type) {
        case UPDATE_ISSUE_DETAILS:
            const {
                issueId,
                title,
                status,
                commentCount,
                comments,
                success
            } = response;
            return {
                success,
                title,
                status,
                issueId,
                commentCount,
                comments
            };
        default: return state;
    }
}

export default issueDetail;