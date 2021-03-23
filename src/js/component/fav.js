import React, { useState, useContext, useRef } from "react";
import PropTypes, { elementType } from "prop-types";

export const Fav = props => {
	return <a className="active-white dropdown-item">{props.nombre}</a>;
};
Fav.propTypes = {
	nombre: PropTypes.string
};
