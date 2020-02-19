import styled from 'styled-components'
import { white, bpMedium } from '../../../styles/base/variables'

export const StyledAboutHero = styled.div`
	display: grid;
	grid-row-gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));

	@media (${bpMedium}) {
		grid-column-gap: 3rem;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 2fr 2fr 1fr 0.6fr;
	}

	& svg {
		fill: ${white};
	}

	& .title {
		grid-column: 1;

		@media (${bpMedium}) {
			grid-row: 1;
		}
	}

	& .blurb {
		grid-column: 1;

		@media (${bpMedium}) {
			grid-row: 2;
		}
	}

	& .cta {
		grid-column: 1;
		grid-row: 5;

		@media (${bpMedium}) {
			grid-row: 3;
		}
	}

	& img {
		grid-column: 1;
		grid-row: 4;
		height: 100%;
		min-height: 300px;
		object-fit: cover;
		width: 100%;

		@media (${bpMedium}) {
			grid-row: 1 / span 3;
			grid-column: 2;
			object-fit: contain;
		}
	}

	& .desc {
		grid-column: 1;
		grid-row: 4 / span 3;

		@media (${bpMedium}) {
			grid-column: 2;
			grid-row: 3 / span 2;
		}

		& svg {
			display: block;
			height: auto;
			margin-left: auto;
			width: 277px;
		}
	}
`