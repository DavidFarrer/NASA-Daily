import React from "react";
import { Switch, Route } from "react-router-dom";
import Daily from "./Daily";

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Daily} />
		</Switch>
	</main>
);

export default Main;