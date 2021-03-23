import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Opencardp } from "../component/opencardp";

export const Single2 = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);
	return (
		<div className="container-fluid mb-5">
			<div className="row flex-row flex-nowrap overflow-auto ">
				{store.planets.map((item, i) => {
					if (params.name == item.name) {
						return (
							<Opencardp
								key={i}
								name={item.name}
								population={item.population}
								climate={item.climate}
								terrain={item.terrain}
								gravity={item.gravity}
								water={item.surface_water}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

Single2.propTypes = {
	match: PropTypes.object
};
