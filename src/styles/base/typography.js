import { css } from 'styled-components'
import { colors, mq } from './variables'

export const Typography = css`
	h1,
	.h1 {
		font-size: 3rem;
		padding: 1.875rem 0;

		@media(${mq.bpMedium}) {
			font-size: 5rem;
		}
	}

	h2,
	.h2 {
		font-size: 2.6rem;
		letter-spacing: 1px;

		@media(${mq.bpMedium}) {
			font-size: 4.5rem;
		}
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

		a {
			color: ${colors.chateau};
		}
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	blockquote {
		padding: 0;
		text-align: center;

		& p {
			font-size: 5rem;
			font-weight: 900;
			letter-spacing: 4px;
			margin: 0;
			text-align: center;

			&::before {
				content: open-quote;
			}

			&::after {
				content: close-quote;
			}
		}
	}

	.-overlay {
		mix-blend-mode: overlay;
	}

	.-difference {
		mix-blend-mode: difference;
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