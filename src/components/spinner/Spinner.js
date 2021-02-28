import React from "react";
import classes from "./spinner.module.css";

const Spinner = props => (
	<div id='spinnerIcon' style={{ fontSize: props.size }} className={classes.Loader}></div>
);

export default Spinner;
