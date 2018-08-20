import 'core-js/features/promise';
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./main.scss";
import store from '../store/githubStore';
import App from '../components/App';

render((
    <Provider store={store}>
        <App />
    </Provider>
),
    document.getElementById('reactRoot'));