import styled from 'styled-components'
import {GRADIENT, HEIGHT as H, Z_INDEX as Z} from '../../../style-vars'

const StyledPage = styled.main`
	${GRADIENT.darkA};
  /* Display */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
  /* Dimensions */
	min-height: 100vh;
	height: ${H.content};
	width: 100vw;
	overflow: auto;
	/* Spacing */
	margin: 0;
	padding: ${props => props.showHUD ? '10vh 0 0 0' : '0'};
  /* Position/Movement */
	transition: all .33s ease-out;
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	z-index: ${Z.back};
`
export default StyledPage
