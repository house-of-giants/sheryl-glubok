import styled from 'styled-components'
import { motion } from 'framer-motion'

import { colors, mq, containerWidth } from '../../styles/base/variables'

const StyledSinglePost = styled(motion.article)`
	& .post-head {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;

		& h1,
		& p {
			background-color: rgba(76, 41, 84, 0.8);
			margin: 0;
			padding: 1rem;
		}
	}

	& .meta {
		position: absolute;
		text-align: center;
		width: 100%;

		@media(${mq.bpLarge}) {
			max-width: ${containerWidth};
		}
	}

	& .hero {
		width: 100%;

		& img {
			height: 50vh;
			object-fit: cover;
			width: 100%;
		}
	}

	& .back {
		color: ${colors.chateau};
		display: block;

		&:first-child {
			padding-top: 2rem;
			padding-bottom: 2rem;
		}

		&:last-child {
			padding-top: 2rem;
		}
	}
`

export default StyledSinglePost