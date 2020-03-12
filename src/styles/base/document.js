import { css } from 'styled-components'
import { colors, fonts } from './variables'

export const DocStyles = css`
	body {
		background: ${ colors.black };
		color: ${ colors.white };
		font-family: ${ fonts.primary };
		margin: 0;
		padding: 0;
	}

	img,
	svg {
		max-width: 100%;
	}

	iframe {
		display: block;
		margin: 0 auto;
		max-width: 100%;
	}
`