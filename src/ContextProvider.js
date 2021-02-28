import React from "react";
import PropTypes from "prop-types";
import { AppContext } from "./AppContext";

const ContextProvider = ({ children, value }) => {
	const { state, dispatch } = value;
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

ContextProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	value: PropTypes.object
};

export default ContextProvider;