import { UPDATE_ISSUE_DETAILS } from "../src/constants";

function issueDetail(state = {}, { type, response }) {
    switch (type) {
        case UPDATE_ISSUE_DETAILS:
            const { userId, userUrl, issueId, title, status, commentCount, desc, comments, success } = response;
            return {
                success,
                userId,
                userUrl,
                title,
                status,
                issueId,
                commentCount,
                desc,
                comments
            };
        default: return state;
    }
}

export default issueDetail;