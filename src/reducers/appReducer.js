export const appInitialState = { 
    loading: false
}

export const appReducer = (state, action) => {
	switch (action.type) {
		case "SET_LOADING":
			return {
				...state,
				loading: action.payload
		};

		default:
			return { ...state, appInitialState };
	}
};
