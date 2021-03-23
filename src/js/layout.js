import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Single2 } from "./views/single2";
import { Single3 } from "./views/single3";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Characters } from "./component/characters";
import { Opencard } from "./component/opencard";
import { Opencardp } from "./component/opencardp";
import { Charlist } from "./views/charlist";
import { Planetlist } from "./views/planetlist";
import { Vehicleslist } from "./views/vehicleslist";
import { Planets } from "./component/planets";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/people/:name">
							<Single />
						</Route>
						<Route exact path="/planets/:name">
							<Single2 />
						</Route>
						<Route exact path="/vehicles/:name">
							<Single3 />
						</Route>
						<Route exact path="/charlist">
							<Charlist />
						</Route>
						<Route exact path="/opencard">
							<Opencard />
						</Route>
						<Route exact path="/planetlist">
							<Planetlist />
						</Route>
						<Route exact path="/vehicleslist">
							<Vehicleslist />
						</Route>
						<Route>
							<h1 className="p-3">
								There has been a disturbance in the force, I can feel it! find the page you are looking
								for we can not my young padawan
							</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
