import React, { useState, useContext, useRef } from "react";
import dummy from "/workspace/react-hello-webapp/src/img/pic-dummy.png";
import { Context } from "../store/appContext";
import PropTypes, { elementType } from "prop-types";
import { Link } from "react-router-dom";
import { Opencard } from "./opencard";
import { Navbar } from "./navbar";

export const Characters = props => {
	const { store, actions } = useContext(Context);

	const target = store.favorites.find(fav => fav.name === props.nombre) !== undefined;
	console.log("target is ", target);
	let handelerfav = t => {
		if (t == false) {
			actions.addFavorite({ name: props.nombre, type: "people", isfav: true });
		} else if (t) {
			actions.deletefav({ name: props.nombre, type: "people", isfav: true });
		}
	};
	return (
		<div className="col-3 m-5">
			<div id="tarjeta" className="card card-block " styles="width: 18rem;">
				<img className="card-img-top" src={dummy} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text">
						Gender: {props.gender} <br />
						Hair-color: {props.hair} <br />
						Eye-color: {props.eye}
					</p>
					<Link to={`/people/${props.nombre}`} style={{ textDecoration: "none" }}>
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
Characters.propTypes = {
	nombre: PropTypes.string,
	gender: PropTypes.string,
	eye: PropTypes.string,
	hair: PropTypes.string,
	llave: PropTypes.number
};
