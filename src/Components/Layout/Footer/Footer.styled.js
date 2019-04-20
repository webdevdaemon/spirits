import styled from 'styled-components'

const vals = {
  height: '13vh',
}

const StyledFooter = styled.footer`
  background: #00121F;
  background: -webkit-linear-gradient(to bottom, #11232F, #00121F);
  background: linear-gradient(to bottom, #11232F, #00121F);
  color: #E1E8ED;
  height: ${vals.height};
  width: 100vw;
  overflow: hidden;
  position: absolute;
  bottom: ${props => (props.isHidden ? '-' + vals.height : '0')};
  left: 0;
  right: 0;
  top: auto;
  z-index: 100;
  transition: all 0.33s ease-out;
`

export default StyledFooter
