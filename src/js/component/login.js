import React, { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		actions.login(email, password).then(data => history.push("/home"));
		console.log(email, password);
	};
	return (
		<form>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
					Email address
				</label>
				<input
					onChange={e => setEmail(e.target.value)}
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Password
				</label>
				<input
					onChange={e => setPassword(e.target.value)}
					type="password"
					className="form-control"
					id="exampleInputPassword1"
				/>
			</div>
			<div className="mb-3 form-check">
				<input type="checkbox" className="form-check-input" id="exampleCheck1" />
				<label className="form-check-label" htmlFor="exampleCheck1">
					Check me out
				</label>
			</div>
			<button type="button" onClick={e => handleSubmit(e)} className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};
