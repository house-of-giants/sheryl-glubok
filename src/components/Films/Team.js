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
		object-fit: cover;
		width: 100%;
	}

	& .meta {
		padding-left: 2rem;
	}

	& .name {
		margin-bottom: 0.5rem;
		margin-top: 0.5rem;
	}

	& .title {
		color: #777;
		margin-bottom: 2rem;
		padding: 0;
		text-transform: uppercase;
	}

	& .blurb {
		font-size: 1.2rem;
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
