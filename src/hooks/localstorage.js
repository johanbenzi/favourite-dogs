const useLocalStorage = () => {
	const addToLocalStorage =  (url) => {
        let currentFavourites = JSON.parse(localStorage.getItem('favourites'));
        if(!currentFavourites) {
            currentFavourites = [];
            currentFavourites.push(url)
            localStorage.setItem('favourites', JSON.stringify(currentFavourites));
            return;
        }
        currentFavourites.push(url)
        localStorage.setItem('favourites', JSON.stringify(currentFavourites));
    };

    const getAllFromLocalStorage =  (dispatch) => {
        dispatch({
            type: "SET_FAVOURITE_IMAGES",
            payload: JSON.parse(localStorage.getItem('favourites')) ? JSON.parse(localStorage.getItem('favourites')) : []
        });
    };

    const removeAllFromLocalStorage =  (dispatch) => {
        localStorage.removeItem('favourites')
        dispatch({
            type: "SET_FAVOURITE_IMAGES",
            payload: []
        });
    };

    return {
        addToLocalStorage : addToLocalStorage,
        getAllFromLocalStorage: getAllFromLocalStorage,
        removeAllFromLocalStorage: removeAllFromLocalStorage
    }
};

export default useLocalStorage;