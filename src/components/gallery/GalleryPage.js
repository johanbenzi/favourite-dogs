import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../../AppContext";
import GallerySet from './GallerySet';
import { Button } from "react-bootstrap";
import useHttp from '../../hooks/http';
import { useHistory } from "react-router";
import SpinnerWithOverlay from '../spinner/SpinnerWithOverlay';

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

function GalleryPage() {
    const { state, dispatch } = useAppContext();
    const { getRandomImages } = useHttp();
    const { loading } = state;
    const history = useHistory();

    useEffect(() => {
		    getRandomImages(dispatch);
	}, []);

	return (
		<>
            <TitleContainer>
                <span>
				    <Title>Gallery</Title>
                </span>
                <StyledSpan>
					<StyledButton onClick = {() => getRandomImages(dispatch)}>Next 6 dogs</StyledButton>
                    <StyledButton onClick = { () => {history.push("/favourites")}}>My Favourites</StyledButton>
                </StyledSpan>
			</TitleContainer>
            <MainContainer>
                <GallerySet />
                <SpinnerWithOverlay loading = { loading } spinnerLabel = {"loading"}/>
            </MainContainer>
		</>
	);
}

export default GalleryPage;
