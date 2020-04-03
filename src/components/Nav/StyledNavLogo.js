import styled from 'styled-components'

import { colors, mq } from '../../styles/base/variables'

export const StyledNavLogo = styled.div`
	mix-blend-mode: difference;
	padding-bottom: 5rem;
	position: sticky;
	text-align: center;
	top: 1.6rem;
	z-index: 3;

	& svg {
		display: inline-block;
		fill: ${colors.white};
		padding-left: 1rem;
		max-height: 38px;
		max-width: 192px;

		@media (${mq.bpMedium}) {
			margin-left: auto;
			padding-left: 0;
		}
	}
`
