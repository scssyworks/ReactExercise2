// Add comment
function addComment(issueId, user, comment) {
    return {
        type: "ADD_COMMENT",
        issueId,
        user,
        comment
    };
}

export { addComment };