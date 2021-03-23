import React, { useState, useContext } from "react";
import dummy from "/workspace/react-hello-webapp/src/img/pic-dummy.png";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Planets = props => {
	const { store, actions } = useContext(Context);

	const target = store.favorites.find(fav => fav.name === props.nombre) !== undefined;
	console.log("target is ", target);
	let handelerfav = t => {
		if (t == false) {
			actions.addFavorite({ name: props.nombre, type: "planets", isfav: true });
		} else if (t) {
			actions.deletefav({ name: props.nombre, type: "planets", isfav: true });
		}
	};
	return (
		<div className="col-3 m-5">
			<div id="tarjeta" className="card card-block " styles="width: 18rem;">
				<img className="card-img-top" src={dummy} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text">
						Population: {props.population} <br />
						Terrain: {props.terrain} <br />
						Climate: {props.climate}
					</p>
					<Link to={`/planets/${props.nombre}`} style={{ textDecoration: "none" }}>
						<a href="#" className="btn btn-dark">
							Learn more!
						</a>
					</Link>
					<a href="#" className="btn btn-dark ml-5 mr-0 ">
						<i className={target ? "fas fa-heart" : "far fa-heart"} onClick={() => handelerfav(target)} />
					</a>
				</div>
			</div>
		</div>
	);
};
Planets.propTypes = {
	nombre: PropTypes.string,
	population: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string
};