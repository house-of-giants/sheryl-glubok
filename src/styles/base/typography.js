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

	.content {
		& blockquote {
			border-bottom-width: 8px;
			margin-bottom: 4rem;

			& p {
				font-size: 3rem;
			}
		}
	}

	blockquote,
	.blockquote {
		border-bottom: 16px solid ${colors.white};
		margin: 0;
		padding: 0 0 2rem 0;
		text-align: left;

		&:not(:last-child) {
			margin-bottom: 4rem;
		}

		& > * {
			font-size: 3rem;
			font-weight: 900;
			letter-spacing: 4px;
			line-height: 1.2;
			letter-spacing: 8px;
			margin: 0;
			text-align: left;

			@media (${mq.bpMedium}) {
				font-size: 5rem;
			}

			&::before {
				content: "\\201C";
			}

			&::after {
				content: "\\201D";
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