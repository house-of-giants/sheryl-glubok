import styled from 'styled-components'

import { colors, mq } from '../../styles/base/variables'

export const StyledNavLogo = styled.div`
	padding-bottom: 5rem;
	position: sticky;
	top: 1.6rem;
	z-index: 3;
	mix-blend-mode: difference;

	& svg {
		display: block;
		fill: ${colors.white};
		margin-right: auto;
		padding-left: 1rem;
		max-height: 38px;
		max-width: 192px;

		@media (${mq.bpMedium}) {
			margin-left: auto;
			padding-left: 0;
		}
	}
`
