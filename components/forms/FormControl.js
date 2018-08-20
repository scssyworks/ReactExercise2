import React from "react";

const FormControl = ({
    label,
    onChangeMethod,
    type = "text",
    id,
    classList = [],
    name,
    placeholder,
    ariaLabel
}) => (
        <div className="form-group">
            {label ? <label htmlFor={name}>{label}:</label> : null}
            <input
                onChange={onChangeMethod}
                type={type}
                id={id}
                className={["form-control"].concat(classList).join(" ")}
                name={name}
                placeholder={placeholder}
                aria-label={ariaLabel} />
        </div>
    );

export default FormControl;