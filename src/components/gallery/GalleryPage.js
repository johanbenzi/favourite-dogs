import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../AppContext";
import GallerySet from './GallerySet'

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

	return (
		<>
            <TitleContainer>
				<Title id='AppName'>Gallery</Title>
			</TitleContainer>
            <MainContainer>
                <GallerySet />
            </MainContainer>
            
		</>
	);
}

export default GalleryPage;
