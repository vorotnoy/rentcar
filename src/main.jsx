import React from "react";
import ReactDOM from "react-dom/client";
import { persistor, store } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "./index.scss";

import App from "../src/App";
import { BrowserRouter, HashRouter} from "react-router-dom";

import './index.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
     {/* <PersistGate loading={null} persistor={persistor}> */}
     <BrowserRouter basename='/rentcar' >
        <App />
       </BrowserRouter>
     {/* </PersistGate> */}
    </Provider>
);
