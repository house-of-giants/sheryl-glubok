import { css } from 'styled-components'

export const Typography = css`
	h1,
	.h1 {
		font-size: 5rem;
		padding: 1.875rem 0;
	}

	h2,
	.h2 {
		font-size: 4.5rem;
		letter-spacing: 1px;
	}

	h3,
	.h3 {
		font-size: 2rem;
	}

	h4,
	.h4 {
		font-size: 1.25rem;
	}

	p {
		font-size: 1.3rem;
		line-height: 1.6;

		&:not(:last-of-type) {
			padding-bottom: 2rem;
		}
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	.-overlay {
		mix-blend-mode: overlay;
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
`