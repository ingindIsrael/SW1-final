import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import ProtoTypes from "prop-types";
import { Planets } from "../component/planets";
import { Link } from "react-router-dom";

export const Planetlist = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid mb-5">
			<Link to="/planetlist" style={{ textDecoration: "none" }}>
				<h1 className="ml-5 mb-0">Planets</h1>
			</Link>
			<div className="row flex-row flex-nowrap overflow-auto ">
				{store.planets.map((item, i) => {
					return (
						<Planets
							key={i}
							nombre={item.name}
							climate={item.climate}
							terrain={item.terrain}
							population={item.population}
						/>
					);
				})}
			</div>
		</div>
	);
};
