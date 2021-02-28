import React from "react";
import styled from "styled-components";
import { Col, Image } from "react-bootstrap";

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
	return (
        <StyledCol md={4}>
            <Image src = {props.imageUrl} alt = "Error in loading" rounded fluid/>
		</StyledCol>
	);
}

export default FavouriteTile;