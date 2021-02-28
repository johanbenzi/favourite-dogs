import axios from "axios";

const useHttp = () => {
	const getRandomImages = async (dispatch) => {
        dispatch({
            type: "SET_LOADING",
            payload: true
        });
        dispatch({
            type: "SET_RANDOM_IMAGES",
            payload: []
        });

        let axiosRequests = [];
        for(let i=0;i<6;i++) {
            axiosRequests.push(axios.get("https://random.dog/woof.json"));
        }

        await axios
            .all(axiosRequests)
            .then((response) => {
                dispatch({
                    type: "SET_RANDOM_IMAGES",
                    payload: response.map(x =>  x.data.url)
                });
                dispatch({
                    type: "SET_LOADING",
                    payload: false
                });

            }).catch(() => {
                dispatch({
                    type: "SET_LOADING",
                    payload: false
                });
            });

    };
    return {
        getRandomImages : getRandomImages
    }
};

export default useHttp;