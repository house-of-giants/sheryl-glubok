import { css } from 'styled-components'
import { colors } from './variables'

export const DocStyles = css`
	body {
		background: ${ colors.codGray };
		color: ${ colors.white };
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	& h1 {
		font-size: 5rem;
		padding: 1.875rem 0;
	}

	.screen-reader-text {
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		height: 1px;
		width: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
	}

	img {
		max-width: 100%;
	}
`