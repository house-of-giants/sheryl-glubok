import React from 'react'
import styled from 'styled-components'
import { bpMedium } from '../../styles/base/variables'

const StyledColumns = styled.div`
	display: grid;
	grid-column-gap: var(--colGap);
	grid-row-gap: var(--rowGap);
	grid-template-columns: 1fr;
	padding-bottom: 4rem;

	@media (${bpMedium}) {
		--cols: ${props => props.cols};
		--rows: ${props => props.rows};
		--colGap: ${props => props.colGap};
		--rowGap: ${props => props.rowGap};

		grid-template-columns: var(--cols);
		grid-template-rows: var(--rows);
		padding-bottom: 8rem;
	}

	& p {
		margin: 0;
		padding: 0;

		&:last-child {
			margin-bottom: 1rem;
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

const Columns = ({ cols = 'auto', rows = 'auto', colGap = '0', rowGap = '0', children }) => (
	<StyledColumns cols={cols} rows={rows} colGap={colGap} rowGap={rowGap}>
		{children}
	</StyledColumns>
)

export default Columns