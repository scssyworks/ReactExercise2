import React from "react";
import ButtonControl from "./ButtonControl";

const SubmitControl = (props) => {
    const { classList } = props;
    const newProps = {
        ...props,
        type: "submit",
        classList: ["btn-primary", ...classList]
    };
    return <ButtonControl {...newProps} />;
};

export default SubmitControl;