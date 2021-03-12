import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import openfoto from "/workspace/react-hello-webapp/src/img/opencard.png";
import ProtoTypes from "prop-types";

export const OpenCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card flex-row flex-wrap">
				<div id="openfotocont" className="card-header border-0 ">
					<img id="openfoto" src={openfoto} alt="" />
				</div>
				<div id="opentext" className="card-block px-2">
					<h4 className="card-title">{prop.name}</h4>
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
								<th scope="col">Birth</th>
								<th scope="col">Gender</th>
								<th scope="col">Height</th>
								<th scope="col">Hair color</th>
								<th scope="col">Eyes color</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">luke</th>
								<td>87BBY</td>
								<td>male</td>
								<td>2.87</td>
								<td>blue</td>
								<td>blue</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
OpenCard.protoTypes = {
	name: ProtoTypes.string
};
