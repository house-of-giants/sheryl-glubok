import styled from 'styled-components'
import { motion } from 'framer-motion'
import { white, bpLarge } from '../../../styles/base/variables'

export const StyledAboutHero = styled(motion.div)`
	display: grid;
	grid-row-gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));

	@media (${bpLarge}) {
		grid-column-gap: 3rem;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 2fr 2fr 1fr 0.6fr;
	}

	& svg {
		fill: ${white};
	}

	& .title {
		grid-column: 1;

		@media (${bpLarge}) {
			grid-row: 1;
		}
	}

	& .blurb {
		grid-column: 1;

		@media (${bpLarge}) {
			grid-row: 2;
		}
	}

	& .cta {
		grid-column: 1;
		grid-row: 5;
		z-index: 2;

		@media (${bpLarge}) {
			grid-row: 3;
		}
	}

	& .image {
		grid-column: 1;
		grid-row: 4;
		height: 100%;
		min-height: 400px;
		position: relative;
		width: 100%;
		z-index: 0;

		@media (${bpLarge}) {
			grid-row: 1 / span 3;
			grid-column: 2;
		}

		& img {
			height: 100%;
			object-position: 0 19%;
			object-fit: cover;
			position: absolute;
			width: 100%;
		}
	}

	& .desc {
		grid-column: 1;
		grid-row: 5 / span 3;
		position: relative;
		z-index: 1;

		@media (${bpLarge}) {
			grid-column: 2;
			grid-row: 3 / span 2;
		}

		& svg {
			display: block;
			height: auto;
			margin-left: auto;
			width: 45%;

			@media (${bpLarge}) {
				width: 277px;
			}
		}
	}
`