import React, { Component } from "react";
import ButtonControl from "../forms/ButtonControl";

class Paginator extends Component {
    render() {
        const { pageNumber, totalPages } = this.props;
        return (
            <div className="issues-pagination input-group">
                <div className="input-group-prepend mr-3">
                    <ButtonControl
                        classList={["btn-outline-secondary"]}
                        innerJSX="Previous"
                        disabled={pageNumber === 1}
                    />
                </div>
                <div className="input-group-append">
                    <ButtonControl
                        classList={["btn-outline-secondary"]}
                        innerJSX="Next"
                        disabled={pageNumber >= totalPages}
                    />
                </div>
            </div>
        );
    }
}

export default Paginator;