import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import ProtoTypes from "prop-types";
import { Vehicles } from "../component/vehicles";
import { Link } from "react-router-dom";

export const Vehicleslist = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid ">
			<Link to="/vehicleslist" style={{ textDecoration: "none" }}>
				<h1 className="ml-5 mb-0">Vehicles</h1>
			</Link>
			<div className="row flex-row flex-nowrap overflow-auto ">
				{store.vehicles.map((item, i) => {
					return (
						<Vehicles
							key={i}
							nombre={item.name}
							class={item.vehicle_class}
							manufacturer={item.manufacturer}
							model={item.model}
						/>
					);
				})}
			</div>
		</div>
	);
};
