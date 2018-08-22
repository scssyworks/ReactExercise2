import React from "react";

const ButtonControl = ({
    type = "button",
    classList = ["btn-primary"],
    id,
    innerJSX = "Submit",
    disabled = false
}) => {
    const btnProps = {
        type,
        className: ["btn"].concat(classList).join(" "),
        id,
        role: "button"
    };
    if (disabled) {
        btnProps.disabled = "disabled";
    }
    return (
        <button {...btnProps}>
            {innerJSX}
        </button>
    );
};

export default ButtonControl;