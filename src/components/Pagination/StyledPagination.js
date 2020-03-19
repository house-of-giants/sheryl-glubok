import styled from 'styled-components'
import { colors, mq } from '../../styles/base/variables'

const StyledPagination = styled.nav`
	margin: 0 auto;
	padding-top: 8rem;
	text-align: center;

	& ul {
		align-items: center;
		display: flex;
		justify-content: center;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	& li:not(:last-child) {
		padding-right: 2rem;
	}

	& a {
		color: ${colors.white};
		font-size: 1.3rem;
		transition: 300ms ease color;

		@media(${mq.bpMedium}) {
			font-size: 1.8rem;
		}

		&:hover,
		&:focus {
			color: ${colors.chateau};
			text-decoration: none;
		}
	}
`

export default StyledPagination