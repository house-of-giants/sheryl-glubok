import styled from 'styled-components'

import { colors, mq, containerWidth } from '../../styles/base/variables'

import { ThawStyles } from './Thaw'
import { AlexiaStyles } from './Alexia'
import { Sonnet98Styles } from './Sonnet98'
import { FishbowlStyles } from './Fishbowl'
import { LilyNRoseStyles } from './LilyNRose'

const StyledFilm = styled.div`
	padding-bottom: 13.25rem;

	& .film-wrap {
		display: grid;
		margin: 0 auto;
		max-width: ${containerWidth};
	}

	${() => FishbowlStyles}
	${() => LilyNRoseStyles}
	${() => Sonnet98Styles}
	${() => ThawStyles}
	${() => AlexiaStyles}

	& img {
		height: 100%;
		left: 0;
		object-fit: cover;
		position: absolute;
		top: 0;
		width: 100%
	}

	& a {
		color: ${colors.white};
	}

	& .meta {
		display: flex;
		grid-column: -4 / span 3;
		grid-row: -1;
		justify-content: space-between;
		position: relative;
		z-index: 2;

		@media(${mq.bpLarge}) {
			grid-column -3 / span 2;
		}

		& p {
			align-items: center;
			display: flex;
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
	}
`

export default StyledFilm