import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import appReducers from "./reducers/index";
import thunk from "redux-thunk";
const store = createStore(appReducers, compose(applyMiddleware(thunk)));
let theme = createMuiTheme({
  palette: {},
});
theme = responsiveFontSizes(theme);
ReactDOM.render(
  
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Provider>,
 
  document.getElementById("root")
);
