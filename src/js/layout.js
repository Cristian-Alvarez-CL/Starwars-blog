import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";

import { Home } from "./views/home.js";
import { Demo } from "./views/demo.js";
import { Single } from "./views/single.js";
import { Details } from "./views/details.js";
import { PlanetDetails } from "./views/planet_details.js";
import Store from "./store/appContext.js";

import { Navbar } from "./component/navbar.js";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/demo" component={Demo} />
							<Route path="/single/:theid" component={Single} />
							<Route path="/details/:theid" component={Details} />
							<Route
								path="/planet_details/:theid"
								component={PlanetDetails}
							/>
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</div>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);