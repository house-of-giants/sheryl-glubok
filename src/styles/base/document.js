import { css } from 'styled-components'
import { colors } from './variables'

export const DocStyles = css`
	body {
		background: ${ colors.black };
		color: ${ colors.white };
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		margin: 0;
		padding: 0;
	}

	img,
	svg {
		max-width: 100%;
	}
`