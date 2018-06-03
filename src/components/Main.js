import React from "react";
import { Switch, Route } from "react-router-dom";
import Daily from "./Daily";
import NearEarth from "./NearEarth";

const Main = () => (
	<main className="mainContent">
		<Switch>
			<Route exact path="/" component={Daily} />
			<Route path="/nearearth" component={NearEarth} />
		</Switch>
	</main>
);

export default Main;