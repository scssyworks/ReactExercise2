import React, { PureComponent } from "react";
import ReactMarkdown from "react-markdown";
import sanitizeHtml from "sanitize-html";

class CommentBlock extends PureComponent {
    render() {
        const { desc, updated, def, userId } = this.props.comment;
        const sanitizedDesc = sanitizeHtml(desc, {
            allowedTags: []
        });
        return (
            <li>
                <div className="comment-user"><span>{userId}</span></div>
                <div className="comment-block">
                    <div className={def ? "updated-on default" : "updated-on"}>Updated: <span>{updated}</span></div>
                    <ReactMarkdown source={sanitizedDesc} />
                </div>
            </li>
        );
    }
}

export default CommentBlock;