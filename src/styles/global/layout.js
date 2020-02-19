import styled from 'styled-components'
import { container, mq } from '../base/variables'

export const StyledContainer = styled.div`
	margin: 0 auto;
	max-width: ${ container.width };
	padding: 0 1rem;

	& .wrap {
		max-width: ${ container.widthNarrow };
	}
`