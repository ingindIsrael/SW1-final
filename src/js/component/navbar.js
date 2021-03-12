import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				{/*<span className="navbar-brand mb-0 h1">*/}

				<img id="swlogo" src="https://cdn.freelogovectors.net/wp-content/uploads/2018/04/star-wars-logo.png" />
				{/*</span>*/}
			</Link>
			<div className="ml-auto">
				{/*<Link to="/demo">*/}
				<button className="btn btn-dark">
					Favorites
					<span className="badge badge-light ml-1">0</span>
					<button
						id="favoriteDrop"
						className="btn btn-outline-secondary dropdown-toggle btn-sm"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					/>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
						<div role="separator" className="dropdown-divider" />
						<a className="dropdown-item" href="#">
							Separated link
						</a>
					</div>
				</button>
				{/*</Link>*/}
			</div>
		</nav>
	);
};
