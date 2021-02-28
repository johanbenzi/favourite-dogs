export const appInitialState = { 
    loading: false,
    randomImageUrls: []
}

export const appReducer = (state, action) => {
	switch (action.type) {
		case "SET_LOADING":
			return {
				...state,
				loading: action.payload
        };
        case "SET_RANDOM_IMAGES":
			return {
				...state,
				randomImageUrls: action.payload
        };

		default:
			return { ...state, appInitialState };
	}
};
