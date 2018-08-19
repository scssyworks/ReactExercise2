import React from "react";
import { render } from "react-dom";
import "./main.scss";

console.log('Works like a charm');

render((
    <div className="test-class">
        This works like a charm
    </div>
),
    document.querySelector('.js-main'));