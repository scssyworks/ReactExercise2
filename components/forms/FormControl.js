import React from "react";
import InputControl from "./InputControl";

const FormControl = ({
    label,
    onChangeMethod,
    type = "text",
    id,
    classList = [],
    name,
    placeholder,
    ariaLabel,
    formGroupClassList = []
}) => (
        <div className={["form-group"].concat(formGroupClassList).join(" ")}>
            {label ? <label htmlFor={name}>{label}:</label> : null}
            <InputControl
                onChangeMethod={onChangeMethod}
                type={type}
                id={id}
                classList={classList}
                name={name}
                placeholder={placeholder}
                ariaLabel={ariaLabel} />
        </div>
    );

export default FormControl;