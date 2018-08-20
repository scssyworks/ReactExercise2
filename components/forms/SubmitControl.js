import React from "react";

const SubmitControl = ({
    type = "submit",
    classList = [],
    id,
    innerJSX = "Submit"
}) => (
        <button
            type={type}
            className={["btn", "btn-primary"].concat(classList).join(" ")}
            role="button"
            id={id}>
            {innerJSX}
        </button>
    );

export default SubmitControl;