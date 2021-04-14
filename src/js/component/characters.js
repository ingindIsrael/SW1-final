import React, { useState, useContext, useRef } from "react";
import dummy from "/workspace/SW1-final/src/img/pic-dummy.png";
import { Context } from "../store/appContext";
import PropTypes, { elementType } from "prop-types";
import { Link } from "react-router-dom";
import { Opencard } from "./opencard";
import { Navbar } from "./navbar";

export const Characters = props => {
	const { store, actions } = useContext(Context);
	const targetID = () => {
		const character = store.favorites.filter(item => item.name == props.nombre);
		console.log("CHARACTER: ", character);
		return character[0].id;
	};

	const target = store.favorites.find(fav => fav.name === props.nombre) !== undefined;
	const handelerfav = t => {
		const target = store.favorites.find(fav => fav.name === t) !== undefined;
		console.log("TARGET: ", target);
		if (target == false) {
			actions.addFavorite({ name: props.nombre, type: "people", isfav: true });
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
Characters.propTypes = {
	nombre: PropTypes.string,
	gender: PropTypes.string,
	eye: PropTypes.string,
	hair: PropTypes.string,
	llave: PropTypes.number
};
