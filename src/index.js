import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import rootReducer from "./reducers";
// import "./index.scss";

// const store = createStore(rootReducer);

ReactDOM.render((
	// <Provider store={store}>
		<BrowserRouter basename="/NASA-Daily">
			<App />
		</BrowserRouter>
	// </Provider>
	), document.getElementById("app")
);

module.hot.accept();