import React from "react";
import { useAppContext } from "../../AppContext";
import { Container, Row} from "react-bootstrap";
import ImageTile from '../image/ImageTile';

function GallerySet() {
    const { state, dispatch } = useAppContext();
    const  { randomImageUrls } =  state;

	return (
		<Container>
            <Row>
                {
                    randomImageUrls.map((randomeImageUrl, index) => {
                        return <ImageTile imageUrl = { randomeImageUrl } key = {index}/>;
                    })
                }
            </Row>
		</Container>
	);
}

export default GallerySet;
