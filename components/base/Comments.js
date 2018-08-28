import React, { PureComponent } from "react";
import CommentList from "./CommentList";

class Comments extends PureComponent {
    render() {
        return (
            <div className="user-comments">
                <span className="user-comments-title">Comments</span>
                <CommentList comments={this.props.comments} />
            </div>
        );
    };
}

export default Comments;