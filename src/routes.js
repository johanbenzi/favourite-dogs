import React from "react";
import { Router, Route, Switch } from "react-router";
import history from "./history";
import GalleryPage from "./components/gallery/GalleryPage";
import FavouritePage from "./components/favourites/FavouritePage";

const Routes = () => {
	return (
		<div>
			<Router history={history}>
				<Switch>
					<Route exact path='/' component={ GalleryPage } />
                    <Route exact path='/favourites' component={ FavouritePage} />
				</Switch>
			</Router>
		</div>
	);
};

export default Routes;
