import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../../AppContext";
import GallerySet from './GallerySet';
import { Button } from "react-bootstrap";
import useHttp from '../../hooks/http';
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

function GalleryPage() {
    const { state, dispatch } = useAppContext();
    const { getRandomImages } = useHttp();
    const { loading } = state;

    useEffect(() => {
		    getRandomImages(dispatch);
	}, []);

	return (
		<>
            <TitleContainer>
				<Title id='AppName'>Gallery</Title>
                <Button onClick = {() => getRandomImages(dispatch)}>Next</Button>
			</TitleContainer>
            <MainContainer>
                <GallerySet />
                <SpinnerWithOverlay loading = { loading } spinnerLabel = {"loading"}/>
            </MainContainer>
		</>
	);
}

export default GalleryPage;
