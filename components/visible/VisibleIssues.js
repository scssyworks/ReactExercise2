import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Issues from "../base/Issues";
import { fetchIssues } from "../../actions/issues";

const VisibleIssues = connect(function (state) {
    return {
        count: state.count,
        username: state.username,
        repository: state.repository,
        isFetched: state.isFetched,
        issues: state.issues,
        pageNumber: state.pageNumber,
        totalPages: state.totalPages
    }
}, function (dispatch) {
    return bindActionCreators({
        fetchIssues
    }, dispatch);
})(Issues);

export default VisibleIssues;