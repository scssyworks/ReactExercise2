import React from "react";

const InputControl = ({
    onChangeMethod,
    type = "text",
    id,
    classList = [],
    name,
    placeholder,
    ariaLabel
}) => (
        <input
            type={type}
            onChange={onChangeMethod}
            id={id}
            className={["form-control"].concat(classList).join(" ")}
            name={name}
            placeholder={placeholder}
            aria-label={ariaLabel} />
    );

export default InputControl;