import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addComment } from "../actions/CommentForm";
import { next, prev } from "../actions/Paginator";
import { searchSubmit } from "../actions/Search";
import { sortBy } from "../actions/SortBy";
import { updateIssues, fetchIssues } from "../actions/issues";
import Home from "./Home";

const App = connect(function (state) {
    return {
        issues: state.issues,
        comments: state.comments
    };
}, function (dispatch) {
    return bindActionCreators({
        addComment,
        next,
        prev,
        searchSubmit,
        sortBy,
        updateIssues,
        fetchIssues
    }, dispatch);
})(Home);

export default App;