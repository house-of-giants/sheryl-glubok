import styled from 'styled-components'
import { colors, bpMedium } from '../../../styles/base/variables'

export const StyledAboutCTA = styled.div`
	& .logo {
		max-height: 131px;

		@media(${bpMedium}) {
			margin-bottom: -3.5rem;
		}
	}

	& svg {
		fill: ${colors.white};
	}

	& .strip {
		display: grid;
		grid-template-columns: 1fr;
		padding-bottom: 3rem;

		@media (${bpMedium}) {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		}

		& img {
			margin: 0 auto;
		}
	}

	& .content {
		display: grid;
		grid-template-columns: 1fr;

		@media (${bpMedium}) {
			grid-gap: 3rem;
			grid-template-columns: repeat(2, 1fr);
		}
	}
`