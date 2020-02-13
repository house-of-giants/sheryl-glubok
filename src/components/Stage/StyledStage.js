import styled from 'styled-components'

export const StyledStage = styled.div`
	& canvas {
		position: fixed;
		left: 0;
		mix-blend-mode: luminosity;
		pointer-events: none;
		top: 0;
		width: 100%;
		height: 100vh;
		z-index: 0;
	}
`
