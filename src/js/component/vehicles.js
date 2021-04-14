import React, { useState, useContext } from "react";
import dummy from "/workspace/SW1-final/src/img/pic-dummy.png";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	const targetID = () => {
		const character = store.favorites.filter(item => item.name == props.nombre);
		console.log("CHARACTER: ", character);
		return character[0].id;
	};

	// const target = store.favorites.find(fav => fav.name === props.nombre) !== undefined;
	// console.log("target is ", target);
	// let handelerfav = t => {
	// 	if (t == false) {
	// 		actions.addFavorite({ name: props.nombre, type: "vehicles", isfav: true });
	// 	} else if (t) {
	// 		actions.deletefav({ name: props.nombre, type: "vehicles", isfav: true });
	// 	}
	// };
	const target = store.favorites.find(fav => fav.name === props.nombre) !== undefined;
	const handelerfav = t => {
		const target = store.favorites.find(fav => fav.name === t) !== undefined;
		console.log("TARGET: ", target);
		if (target == false) {
			actions.addFavorite({ name: props.nombre, type: "vehicles", isfav: true });
		} else {
			actions.deletefav(targetID());
		}
		return target;
	};
	return (
		<div className="col-3 m-5">
			<div id="tarjeta" className="card card-block " styles="width: 18rem;">
				<img className="card-img-top" src={dummy} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text">
						Manufacturer: {props.manufacturer} <br />
						Model: {props.model} <br />
						Class: {props.class}
					</p>
					<Link to={`/vehicles/${props.nombre}`} style={{ textDecoration: "none" }}>
						<a href="#" className="btn btn-dark">
							Learn more!
						</a>
					</Link>
					<a href="#" className="btn btn-dark ml-5 mr-0 ">
						<i
							// className={"far fa-heart"}
							className={target ? "fas fa-heart" : "far fa-heart"}
							onClick={() => handelerfav(props.nombre)}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};
Vehicles.propTypes = {
	nombre: PropTypes.string,
	manufacturer: PropTypes.string,
	model: PropTypes.string,
	class: PropTypes.string
};
