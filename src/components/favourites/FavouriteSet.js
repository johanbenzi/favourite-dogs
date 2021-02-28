import React from "react";
import { useAppContext } from "../../AppContext";
import { Container, Row} from "react-bootstrap";
import FavouriteTile from '../image/FavouriteTile';

function FavouriteSet() {
    const { state } = useAppContext();
    const  { favouriteImageUrls } =  state;

	return (
		<Container>
            <Row>
                {
                    favouriteImageUrls.map((imageUrl, index) => {
                        return <FavouriteTile imageUrl = { imageUrl } key = {index}/>;
                    })
                }
            </Row>
		</Container>
	);
}

export default FavouriteSet;
