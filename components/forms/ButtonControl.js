import React from "react";

const ButtonControl = ({
    type = "button",
    classList = ["btn-primary"],
    id,
    innerJSX = "Submit",
    onClickMethod,
    disabled = false
}) => {
    const btnProps = {
        type,
        className: ["btn"].concat(classList).join(" "),
        id,
        role: "button",
        onClick: onClickMethod
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