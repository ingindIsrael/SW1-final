import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Opencard } from "../component/opencard";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);
	return (
		<div className="container-fluid mb-5">
			<div className="row flex-row flex-nowrap overflow-auto ">
				{store.people.map((item, i) => {
					if (params.name == item.name) {
						return (
							<Opencard
								key={i}
								name={item.name}
								gender={item.gender}
								eye={item.eye_color}
								hair={item.hair_color}
								birth={item.birth}
								height={item.height}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
