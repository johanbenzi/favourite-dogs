export const appInitialState = { 
    loading: false,
    randomImageUrls: [],
    favouriteImageUrls: [],
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
        case "SET_FAVOURITE_IMAGES":
			return {
				...state,
				favouriteImageUrls: action.payload
        };

		default:
			return { ...state, appInitialState };
	}
};
