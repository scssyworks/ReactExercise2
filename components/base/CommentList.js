import React, { PureComponent } from "react";
import CommentBlock from "./CommentBlock";

class CommentList extends PureComponent {
    renderList = () => {
        const { comments } = this.props;
        return comments.map((comment, index) => <CommentBlock comment={comment} key={index} />);
    }
    render() {
        return (
            <ul className="comment-list">
                {this.renderList()}
            </ul>
        );
    }
}

export default CommentList;