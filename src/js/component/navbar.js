import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Fav } from "./fav";
import { Characters } from "../component/characters";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import PropTypes, { elementType } from "prop-types";
import DropdownButton from "react-bootstrap/DropdownButton";

export const Navbar = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				{/*<span className="navbar-brand mb-0 h1">*/}

				<img id="swlogo" src="https://cdn.freelogovectors.net/wp-content/uploads/2018/04/star-wars-logo.png" />
				{/*</span>*/}
			</Link>
			<div className="ml-auto">
				<Dropdown>
					<Dropdown.Toggle variant="secondary" id="dropdown-basic">
						Favorites <Badge variant="light">{store.favorites.length}</Badge>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{store.favorites.length === 0 && (
							<Dropdown.Item>favorites you have not yet my padawan</Dropdown.Item>
						)}
						<Dropdown.Item className="active-white" href="#/action-1">
							{store.favorites.map((item, i) => {
								return (
									<Link
										className="active-white"
										key={i}
										to={`/${item.type}/${item.name}`}
										style={{ textDecoration: "none" }}>
										<Fav nombre={item.name} />
									</Link>
								);
							})}
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
			{/*<div className="ml-auto">
				{/*<Link to="/demo">
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
						<a className="dropdown-item">xyz</a>;
						{store.favorites.map((item, i) => {
							return <Fav key={i} nombre={item} />;
						})}
					</div>
				</button>
				{/*</Link>
			</div>*/}
		</nav>
	);
};
Navbar.propTypes = {
	nombre: PropTypes.string
};
