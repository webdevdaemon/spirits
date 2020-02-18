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
	height: ${H.content};
	width: 100vw;
	overflow: auto;
	/* Spacing */
	margin: 0;
	padding: ${props => props.showHUD ? '10vh 0 0 0' : '0'};
  /* Position/Movement */
	transition: all .33s ease-out;
	position: absolute;
	top: ${H.header}; right: 0; bottom: auto; left: 0;
	z-index: ${Z.back};
`
export default StyledPage
