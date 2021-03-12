import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import ProtoTypes from "prop-types";
import { Characters } from "../component/characters";
import { Link } from "react-router-dom";

export const Charlist = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid mb-5">
			<Link to="/charlist" style={{ textDecoration: "none" }}>
				<h1 className="ml-5 mb-0">Characters</h1>
			</Link>
			<div className="row flex-row flex-nowrap overflow-auto ">
				{store.people.map((item, i) => {
					return (
						<Characters
							key={i}
							nombre={item.name}
							gender={item.gender}
							eye={item.eye_color}
							hair={item.hair_color}
						/>
					);
				})}
			</div>
		</div>
	);
};
