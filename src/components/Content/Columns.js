import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { bpMedium, colors, containerWidthNarrow } from '../../styles/base/variables'

const StyledColumns = styled.div`
	display: grid;
	grid-column-gap: var(--colGap);
	grid-row-gap: var(--rowGap);
	grid-template-columns: 1fr;
	${props => {
		if( !props.nopad ) {
			return 'padding-bottom: 4rem;'
		} else {
			return 'margin-bottom: 4rem;'
		}
 	} }

	${props => {
		if( props.separator ) {
			return `border-bottom: 1px dashed ${colors.white};`
		}
 	} }

	@media (${bpMedium}) {
		--cols: ${props => props.cols};
		--rows: ${props => props.rows};
		--colGap: ${props => props.colGap};
		--rowGap: ${props => props.rowGap};

		grid-template-columns: var(--cols);
		grid-template-rows: var(--rows);
		${props => {
			if( !props.nopad ) {
				return 'padding-bottom: 8rem;'
			} else {
				return 'margin-bottom: 8rem;'
			}
		} }
	}

	& > * {
		padding-bottom: 2rem;
	}

	& div:not(.content) {
		& > p,
		& > p:not(:last-of-type) {
			margin: 0;
			padding: 0;

			&:last-child {
				margin-bottom: 1rem;
			}
		}
	}

	& .content {
		& p:first-child {
			padding-top: 2rem;
		}

		& > p {
			font-size: 1.5rem;
		}
	}

	& .-film {
		& > *:not(img):not(blockquote) {
			max-width: 39.9125em;
		}
	}

	& strong {
		font-size: 1rem;
		padding-bottom: 1rem;
	}

	& img {
		object-fit: cover;
		width: 100%;
	}
`

const Columns = ({ cols = 'auto', rows = 'auto', colGap = '0', rowGap = '0', children, separator, nopad }) => (
	<StyledColumns cols={cols} rows={rows} colGap={colGap} rowGap={rowGap} separator={separator} nopad={nopad}>
		{children}
	</StyledColumns>
)

Columns.propTypes = {
	cols: PropTypes.string,
	rows: PropTypes.string,
	colGap: PropTypes.string,
	rowGap: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
}

export default Columns