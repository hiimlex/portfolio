import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";

function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route path="/portfolio" exact>
					<Portfolio></Portfolio>
				</Route>
				<Redirect to="/portfolio"></Redirect>
			</Switch>
		</Router>
	);
}

export default AppRouter;
