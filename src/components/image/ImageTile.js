import React, { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../AppContext";
import { Col, Image, ResponsiveEmbed } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import useLocalStorage from "../../hooks/localstorage";


const StyledCol = styled(Col) `
    padding-top: 10px;
    padding-botton: 10px;
`;

const StyledDiv = styled.div`
    padding: 10px;
`;

const StyledSpan = styled.span`
    color: red;
    padding: 10px;
`;

function ImageTile(props) {
    const { addToLocalStorage, removeFromLocalStorage} = useLocalStorage();
    const [isAddedToFav, setIsAddedToFav] = useState(props.favorite);

    const addToFavourite = (imageUrl) => {
        setIsAddedToFav(true);
        addToLocalStorage(imageUrl);
    };

    const removeFromFavourite = (imageUrl) => {
        setIsAddedToFav(false);
        removeFromLocalStorage(imageUrl);
    };

	return (
        <StyledCol md={4}>
            <ResponsiveEmbed>
                <embed src = {props.imageUrl} alt = "Error in loading"/>
            </ResponsiveEmbed>
            <StyledDiv>
                {
                   isAddedToFav ?  
                   <>
                   <FontAwesomeIcon
					style={{
						color: "red",
						marginTop: "12px",
						marginRight: "12px"
                    }}
                    onClick = { () => removeFromFavourite(props.imageUrl) }
					icon={faHeart}/>
                    <StyledSpan>Added</StyledSpan>
                    </> :
                    <> 
                    <FontAwesomeIcon
					style={{
						color: "red",
						marginTop: "12px",
						marginRight: "12px"
                    }}
                    onClick = { () => addToFavourite(props.imageUrl) }
					icon={farHeart}/>
                    <StyledSpan>Add to Favourites</StyledSpan>
                    </>
                }
            </StyledDiv>
		</StyledCol>
	);
}

export default ImageTile;