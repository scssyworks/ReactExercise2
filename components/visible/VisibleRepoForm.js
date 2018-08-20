import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RepoForm from "../forms/RepoForm";
import { updateUser, updateRepository } from "../../actions/repoForm";

const VisibleRepoForm = connect(function (state) {
    return {
        username: state.username,
        repository: state.repository
    };
}, function (dispatch) {
    return bindActionCreators({
        updateUser,
        updateRepository
    }, dispatch);
})(RepoForm);

export default VisibleRepoForm;