import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../../AppContext";
import FavouriteSet from './FavouriteSet';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import useLocalStorage from "../../hooks/localstorage";

const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 0px 24px 0px;
`;

const Title = styled.h1`
	&&& {
		font-family: Helvetica Neue;
		font-size: 24px;
		font-weight: 400;
		line-height: inherit;
	}
`;

const MainContainer = styled.div`
	background: rgb(255, 255, 255);
	bottom: 17px;
	right: 21px;
	left: 208px;
	top: 146px;
`;

const StyledSpan = styled.span`
	margin-top: 20px;
	float: right;
`;

const StyledButton = styled(Button)`
    margin: 5px;
`;

function FavouritePage() {
    const { state, dispatch } = useAppContext();
    const  { favouriteImageUrls } =  state;
    const history = useHistory();
    const { getAllFromLocalStorage, removeAllFromLocalStorage } = useLocalStorage();

    useEffect(() => {
        getAllFromLocalStorage(dispatch);
	}, []);

	return (
		<>
            <TitleContainer>
                <span>
				    <Title>Favourites</Title>
                </span>
                <StyledSpan>
                    <StyledButton onClick = { () => {history.push("/")}}>Gallery</StyledButton>
                    <StyledButton disabled={ favouriteImageUrls.length === 0 } onClick = { () => removeAllFromLocalStorage(dispatch) }>Clear</StyledButton>
                </StyledSpan>
			</TitleContainer>
            <MainContainer>
                <FavouriteSet />
            </MainContainer>
		</>
	);
}

export default FavouritePage;
