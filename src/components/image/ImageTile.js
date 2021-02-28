import React, { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../AppContext";
import { Col, Image } from "react-bootstrap";
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
    const { state, dispatch } = useAppContext();
    const { addToLocalStorage } = useLocalStorage();
    const [isAddedToFav, setIsAddedToFav] = useState(false);

    const addToFavourite = (imageUrl) => {
        setIsAddedToFav(true);
        addToLocalStorage(imageUrl);
    };

	return (
        <StyledCol md={4}>
            <Image src = {props.imageUrl} alt = "Error in loading" rounded fluid/>
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