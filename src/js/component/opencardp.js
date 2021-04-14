import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import openfoto from "/workspace/SW1-final/src/img/opencard.png";
import PropTypes from "prop-types";

export const Opencardp = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card flex-row flex-wrap">
				<div id="openfotocont" className="card-header border-0 ">
					<img id="openfoto" src={openfoto} alt="" />
				</div>
				<div id="opentext" className="card-block px-2">
					<h4 className="card-title">{props.name}</h4>
					<p className="card-text">
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
						classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
						Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
						words.{" "}
					</p>
				</div>
				<div className="w-100" />
				<div className="card-footer w-100 text-muted">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Population</th>
								<th scope="col">Climate</th>
								<th scope="col">Terrain</th>
								<th scope="col">Gravity</th>
								<th scope="col">Surface water</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">{props.name}</th>
								<td>{props.population}</td>
								<td>{props.climate}</td>
								<td>{props.terrain}</td>
								<td>{props.gravity}</td>
								<td>{props.water}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
Opencardp.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	gravity: PropTypes.string,
	water: PropTypes.string
};
