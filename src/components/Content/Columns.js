import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { bpMedium, colors } from '../../styles/base/variables'

const StyledColumns = styled.div`
	--cols: ${props => props.cols};
	--rows: ${props => props.rows};
	--colGap: ${props => props.colGap};
	--rowGap: ${props => props.rowGap};

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
		grid-template-columns: var(--cols);
		grid-template-rows: var(--rows);
	}

	&.film-meta {
		grid-template-columns: repeat(auto-fit,minmax(170px,1fr));

		@media (${bpMedium}) {
			grid-template-columns: var(--cols);
			grid-template-rows: var(--rows);
		}

		p {
			margin: 0;
		}
	}

	& > * {
		padding-bottom: 2rem;
	}

	& div:not(.content) {
		& > p:not(.title):not(:last-of-type) {
			margin: 0;
			padding: 0;

			&:last-child {
				margin-bottom: 1rem;
			}
		}
	}

	& .content {
		& > *:not(img):not(blockquote):not(.grid-2) {
			max-width: 39.9125em;
		}

		& p:first-child {
			padding-top: 2rem;
		}

		& > p {
			font-size: 1.5rem;
		}

		& .grid-2 {
			display: grid;
			grid-template-rows: 2fr 3fr 1fr;
			grid-template-columns: 3fr 60px 2fr;
			padding-bottom: 2rem;

			img {
				object-fit: cover;
				position: relative;
			}

			& img:first-child {
				grid-row: 1 / span 2;
				grid-column: 1 / span 2;
			}

			& img:last-child {
				grid-row: 2 / span 3;
				grid-column: 2 / -1;
				z-index: -1;
			}
		}

		& blockquote:last-child {
			margin-bottom: 2rem;
		}
	}

	& .-film {
		& > p {
			margin: 0;
		}

		& > p:not(:last-child) {
			padding-bottom: 2rem;
		}

		& > img {
			padding-bottom: 2rem;
		}
	}

	& strong {
		font-size: 1rem;
		padding-bottom: 1rem;
	}

	& img {
		object-fit: cover;
		width: 100%;

		&.poster {
			object-fit: contain;
			max-height: 382px;
		}
	}
`

const Columns = ({ cols = 'auto', rows = 'auto', colGap = '0', rowGap = '0', children, separator, nopad, className }) => (
	<StyledColumns className={className} cols={cols} rows={rows} colGap={colGap} rowGap={rowGap} separator={separator} nopad={nopad}>
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