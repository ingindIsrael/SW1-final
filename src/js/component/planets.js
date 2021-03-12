import React, { useState, useContext } from "react";
import dummy from "/workspace/react-hello-webapp/src/img/pic-dummy.png";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Planets = props => {
	const [icon, setIcon] = useState("far fa-heart");
	const { store, actions } = useContext(Context);
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
					<a href="#" className="btn btn-dark">
						Learn more!
					</a>
					<a href="#" className="btn btn-dark ml-5 mr-0 ">
						<i className={icon} onClick={() => setIcon("fas fa-heart")} />
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
