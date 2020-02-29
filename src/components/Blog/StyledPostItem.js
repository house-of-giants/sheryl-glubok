import styled from 'styled-components'
import { motion } from 'framer-motion'

import { colors, mq } from '../../styles/base/variables'

const StyledPostItem = styled(motion.article)`
	display: flex;
	flex-direction: column;

	@media (${ mq.bpLarge }) {
		&:first-child,
		&:last-child,
		&:nth-child(4),
		&:nth-child(5) {
			& .image::before {
				padding-top: calc((81 / 77) * 100%);
			}
		}

		&:nth-child(4n+1) {
			transform: translateY(-1.5rem);
		}

		&:nth-child(4n+2) {
			align-self: flex-end;
		}

		&:nth-child(4n+3) {
			align-self: flex-start;
			transform: translate(7vw, 1.5rem)
		}

		&:nth-child(4n+4) {
			transform: translate(7vw, 4rem);
		}
	}

	& a {
		color: ${colors.white};
	}

	& .title {
		margin: 0.25rem 0;
	}

	& .date {
		align-items: center;
		display: flex;
		font-size: 0.875rem;
		padding-bottom: 0;

		&::before {
			background-color: ${colors.white};
			border-radius: 5px;
			content: "";
			display: inline-block;
			height: 21px;
			margin-right: 1rem;
			width: 15px;
		}
	}

	& .image {
		position: relative;

		&::before {
			content: "";
			display: block;
			padding-top: calc((46 / 77) * 100%);
			width: 100%;
		}
	}

	& img {
		bottom: 0;
		height: 100%;
		left: 0;
		object-fit: cover;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
	}
`

export default StyledPostItem