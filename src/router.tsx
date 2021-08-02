import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import CV from "./pages/CV";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Portfolio></Portfolio>
				</Route>
				<Route path="/all">
					<Landing></Landing>
				</Route>
				<Route path="/cv">
					<CV></CV>
				</Route>
				<Redirect from="/portfolio" to="/"></Redirect>
				<Redirect from="/" to="/"></Redirect>
			</Switch>
		</Router>
	);
}

export default AppRouter;
