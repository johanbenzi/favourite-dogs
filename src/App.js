import React, { useReducer } from "react";
import { appInitialState, appReducer } from "./reducers/appReducer";
import ContextProvider from "./ContextProvider";
import styled from "styled-components";
import Routes from "./routes";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContainer = styled.div`
	background: #e7e8ea;
	display: flex;
	flex-direction: column;
	padding: 0 24px 24px 24px;
	overflow-y: hidden;
	margin-top: 70px;
	height: calc(100vh - 70px);
`;

function App() {
    const [state, dispatch] = useReducer(appReducer, appInitialState);
    return (
		<ContextProvider
			value={{
				state,
				dispatch
			}}>
			<AppContainer>
				<Routes />
			</AppContainer>
		</ContextProvider>
	);
}

export default App;
