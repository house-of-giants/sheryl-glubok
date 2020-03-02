import styled from 'styled-components'
import { motion } from 'framer-motion'

import { container, mq, colors } from '../base/variables'

export const StyledContainer = styled.div`
	margin: 0 auto;
	max-width: ${ container.width };
	padding: 0 1rem;

	& .wrap {
		max-width: ${ container.widthNarrow };
	}
`

export const StyledBlogContainer = styled(motion.section)`
	margin: 0 auto;
	max-width: ${ container.width };
	padding: 0 1rem;

	& .blog-heading {
		display: grid;
		grid-column: 1 / span 2;
		grid-template-columns: repeat(2, 1fr);
		mix-blend-mode: difference;
		pointer-events: none;
		position: relative;
		z-index: 1;
	}

	& .blog-wrap {
		display: grid;
		grid-column-gap: 7.5rem;
		margin: -4rem auto 0;
		max-width: ${ container.widthNarrow };
		padding: 0 1rem;
		position: relative;

		@media( ${mq.bpLarge} ) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	& svg {
		fill ${ colors.white };
	}
`