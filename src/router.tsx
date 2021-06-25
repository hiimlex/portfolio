import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
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
				<Redirect to="/"></Redirect>
			</Switch>
		</Router>
	);
}

export default AppRouter;
