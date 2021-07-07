import { UPDATE_USER, UPDATE_REPOSITORY } from "../src/constants";

function updateUser(username) {
    return {
        type: UPDATE_USER,
        username
    };
}

function updateRepository(repository) {
    return {
        type: UPDATE_REPOSITORY,
        repository
    };
}

export { updateUser, updateRepository };