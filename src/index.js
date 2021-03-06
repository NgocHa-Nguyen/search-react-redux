import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import thunk from 'redux-thunk';
import logger from "redux-logger"
//<--STORE-->
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import myReducer from "./reducers/index";

const store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && applyMiddleware(thunk,logger)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root") 
);
serviceWorker.unregister();