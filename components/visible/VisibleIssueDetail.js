import { connect } from "react-redux";
import IssueDetail from "../base/IssueDetail";
import { bindActionCreators } from "redux";
import { fetchIssueDetail } from "../../actions/issueDetail";

const VisibleIssueDetail = connect(function (state) {
    return {
        username: state.username,
        repository: state.repository,
        issueDetail: state.issueDetail,
        isFetched: state.isFetched
    };
}, function (dispatch) {
    return bindActionCreators({
        fetchIssueDetail
    }, dispatch);
})(IssueDetail);

export default VisibleIssueDetail;