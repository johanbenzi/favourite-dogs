export const appInitialState = { 
    loading: false,
    randomImageObjects: [123, 321]
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
