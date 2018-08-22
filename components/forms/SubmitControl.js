import React from "react";
import ButtonControl from "./ButtonControl";

const SubmitControl = (props) => {
    const newProps = {
        ...props,
        type: "submit"
    };
    return <ButtonControl {...newProps} />;
};

export default SubmitControl;