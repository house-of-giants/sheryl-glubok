import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAspectRatioBox = styled.div`
	--aspect-ratio: ${props => props.ratio};

	position: relative;
	margin-bottom: 4rem;

	&::before {
		content: "";
		display: block;
		padding-bottom: calc(100% / (var(--aspect-ratio)));
	}

	& > :first-child {
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}
`

const AspectRatioBox = ({ ratio, children }) => (
	<StyledAspectRatioBox ratio={ratio}>
		{children}
	</StyledAspectRatioBox>
)

AspectRatioBox.propTypes = {
	ratio: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
}

export default AspectRatioBox