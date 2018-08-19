import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addComment } from "../actions/CommentForm";
import { next, prev } from "../actions/Paginator";
import { submitForm } from "../actions/RepoForm";
import { searchSubmit } from "../actions/Search";
import { sortBy } from "../actions/SortBy";
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
        submitForm,
        searchSubmit,
        sortBy
    }, dispatch);
})(Home);

export default App;