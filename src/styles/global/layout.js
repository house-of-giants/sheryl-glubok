import styled from 'styled-components'
import { container, mq } from '../base/variables'

export const StyledContainer = styled.div`
	margin: 0 auto;
	max-width: ${ container.width };
	overflow-x: hidden;
	padding: 0 1rem;

	@media (${mq.bpXLarge}) {
		overflow-x: visible;
	}
`