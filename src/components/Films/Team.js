import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { bpLarge } from '../../styles/base/variables'

const StyledTeam = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 4rem;

	@media (${bpLarge}) {
		flex-direction: row;
		flex-wrap: nowrap;
	}

	& img {
		max-height: 300px;
		object-fit: cover;
		width: 100%;

		@media(${bpLarge}) {
			max-height: none;
			max-width: 220px;
		}
	}

	& .meta {
		@media(${bpLarge}) {
			padding-left: 2rem;
		}
	}

	& .name {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		margin-top: 0.5rem;
	}

	& .title {
		color: #777;
		font-size: 0.75rem;
		letter-spacing: 1.2px;
		margin-bottom: 2rem;
		margin-top: 0;
		padding: 0;
		text-transform: uppercase;
	}

	& .blurb {
		font-size: 1.1rem;
		margin: 0;
	}
`

const Team = ({ children }) => <StyledTeam>{children}</StyledTeam>

Team.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
}

export default Team
