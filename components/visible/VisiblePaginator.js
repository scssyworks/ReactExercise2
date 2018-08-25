import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Paginator from "../base/Paginator";

const VisiblePaginator = connect(function (state) {
    return {
        pageNumber: state.pageNumber,
        totalPages: state.totalPages,
        isFetched: state.isFetched,
        username: state.username,
        repository: state.repository
    };
})(Paginator);

export default VisiblePaginator;