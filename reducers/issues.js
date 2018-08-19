// Issues reducer responsible for updating state for github issues

function issues(state = {}, action) {
    switch (action.type) {
        case "UPDATE_ISSUES":
            return Object.assign({}, state, action.response);
        default:
            return state;
    }
}

export default issues;