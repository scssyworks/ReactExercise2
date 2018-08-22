import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Paginator from "../base/Paginator";
import { prev, next } from "../../actions/paginator";

const VisiblePaginator = connect(function (state) {
    return {
        pageNumber: state.pageNumber,
        totalPages: state.totalPages
    };
}, function (dispatch) {
    return bindActionCreators({
        prev,
        next
    }, dispatch);
})(Paginator);

export default VisiblePaginator;