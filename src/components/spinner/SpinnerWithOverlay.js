import React from 'react';
import Spinner from './Spinner';
import styled from 'styled-components';

const SpinnerDiv = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -5vh;
    margin-left: -5vh;
`;

const SpinnerOverlayContainer = styled.div`
    position: fixed;
    width: 100%; /* Full width (cover the whole page) */
    height: 100%;
    background-color: rgba(0,0,0,0.7); /* Black background with opacity */
    z-index: 999;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
`;

const SpinnerLabelContainer = styled.div`
    margin-top: 57vh;
    color: #026b99;
    width: 100%
`;

const SpinnerLabel = styled.h4`
    text-align: center;
`;

function SpinnerWithOverlay(props)  {
    return (props.loading ? (
    <SpinnerOverlayContainer>
        <SpinnerLabelContainer><SpinnerLabel>{props.spinnerLabel}</SpinnerLabel></SpinnerLabelContainer>
        <SpinnerDiv><Spinner width='10vh' height='10vh' /></SpinnerDiv>
    </SpinnerOverlayContainer>) 
    : <> </>
    );
}

export default SpinnerWithOverlay;