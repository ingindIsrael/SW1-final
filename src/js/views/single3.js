import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Opencardv } from "../component/opencardv";

export const Single3 = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);
	return (
		<div className="container-fluid mb-5">
			<div className="row flex-row flex-nowrap overflow-auto ">
				{store.vehicles.map((item, i) => {
					if (params.name == item.name) {
						return (
							<Opencardv
								key={i}
								name={item.name}
								model={item.model}
								passengers={item.passengers}
								manufacturer={item.manufacturer}
								crew={item.crew}
								consumables={item.consumables}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

Single3.propTypes = {
	match: PropTypes.object
};
