import React, { Component } from "react";
import ButtonControl from "../forms/ButtonControl";

class Paginator extends Component {
    fetchNext = () => {
        const { pageNumber, history, username, repository } = this.props;
        history.push(`/list/${username}/${repository}/${pageNumber + 1}`);
    }
    fetchPrevious = () => {
        const { pageNumber, history, username, repository } = this.props;
        history.push(`/list/${username}/${repository}/${pageNumber - 1}`);
    }
    render() {
        const { pageNumber, totalPages, isFetched } = this.props;
        return (
            <div className="issues-pagination input-group">
                <div className="input-group-prepend mr-3">
                    <ButtonControl
                        onClickMethod={this.fetchPrevious}
                        classList={["btn-outline-secondary"]}
                        innerJSX="Previous"
                        disabled={!isFetched || pageNumber === 1}
                    />
                </div>
                <div className="input-group-append">
                    <ButtonControl
                        onClickMethod={this.fetchNext}
                        classList={["btn-outline-secondary"]}
                        innerJSX="Next"
                        disabled={!isFetched || pageNumber >= totalPages}
                    />
                </div>
            </div>
        );
    }
}

export default Paginator;