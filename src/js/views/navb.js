import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import ProtoTypes from "prop-types";
import { Opencard } from "../component/opencard";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const Navb = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
        <Navbar nombre={params.name}/>
    );
    }
