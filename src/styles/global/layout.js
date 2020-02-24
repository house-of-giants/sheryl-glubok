import styled from 'styled-components'
import { container, mq, colors } from '../base/variables'

export const StyledContainer = styled.div`
	margin: 0 auto;
	max-width: ${ container.width };
	padding: 0 1rem;

	& .wrap {
		max-width: ${ container.widthNarrow };
	}
`

export const StyledBlogContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	& .heading {
		display: grid;
		grid-column: 1 / span 2;
		grid-template-columns: repeat(2, 1fr);
	}

	& svg {
		fill ${ colors.white };
	}
`