import 'core-js/features/promise';
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./main.scss";
import App from "../components/App";
import store from '../store/githubStore';

render((
    <Provider store={store}>
        <App />
    </Provider>
),
    document.getElementById('reactRoot'));