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
				<Route path="/portfolio" exact>
					<Portfolio></Portfolio>
				</Route>
				<Route path="/portfolio/all">
					<Landing></Landing>
				</Route>
				<Route path="/portfolio/cv">
					<CV></CV>
				</Route>
				<Redirect from="/portfolio" to="/portfolio"></Redirect>
				<Redirect from="*" to="/portfolio"></Redirect>
			</Switch>
		</Router>
	);
}

export default AppRouter;
