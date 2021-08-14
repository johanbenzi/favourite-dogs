import React from "react";
import styled from "styled-components";
import { Col, ResponsiveEmbed } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "../../hooks/localstorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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

function FavouriteTile(props) {
    const {removeFromLocalStorage} = useLocalStorage();
    const removeFromFavourite = (imageUrl) => {
        removeFromLocalStorage(imageUrl);
    };

	return (
        <StyledCol md={4}>
            <ResponsiveEmbed>
                <embed src = {props.imageUrl} alt = "Error in loading"/>
            </ResponsiveEmbed>
            <StyledDiv>
                <FontAwesomeIcon
                style={{
                    color: "red",
                    marginTop: "12px",
                    marginRight: "12px"
                }}
                onClick = { () => removeFromFavourite(props.imageUrl) }
                icon={faHeart}/>
                <StyledSpan>Added</StyledSpan>
            </StyledDiv>
		</StyledCol>
	);
}

export default FavouriteTile;