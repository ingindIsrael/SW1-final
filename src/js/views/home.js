import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Vehicleslist } from "./vehicleslist";
import { Planetlist } from "./planetlist";
import { Charlist } from "./charlist";

export const Home = () => (
	<div>
		<Charlist />
		<Planetlist />
		<Vehicleslist />
	</div>
);
