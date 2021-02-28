import React from "react";
import { Router, Route, Switch } from "react-router";
import history from "./history";
import GalleryPage from "./components/gallery/GalleryPage";

const Routes = () => {
	return (
		<div>
			<Router history={history}>
				<Switch>
					<Route exact path='/' component={GalleryPage} />
				</Switch>
			</Router>
		</div>
	);
};

export default Routes;
