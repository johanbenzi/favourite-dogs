import React from "react";
import { useAppContext } from "../../AppContext";
import { Container, Row} from "react-bootstrap";
import FavouriteTile from '../image/FavouriteTile';
import ImageTile from '../image/ImageTile';

function FavouriteSet() {
    const { state } = useAppContext();
    const  { favouriteImageUrls } =  state;

	return (
		<Container>
            <Row>
                {
                    favouriteImageUrls.map((imageUrl, index) => {
                        return <ImageTile imageUrl = { imageUrl } favorite = {true} key = {index}/>;
                    })
                }

            </Row>
		</Container>
	);
}

export default FavouriteSet;
