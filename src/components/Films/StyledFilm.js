import styled from 'styled-components'

import { colors, mq } from '../../styles/base/variables'

import { ThawStyles } from './Thaw'
import { AlexiaStyles } from './Alexia'
import { Sonnet98Styles } from './Sonnet98'
import { FishbowlStyles } from './Fishbowl'
import { LilyNRoseStyles } from './LilyNRose'

const StyledFilm = styled.div`
	display: grid;
	padding-bottom: 13.25rem;

	${() => FishbowlStyles}
	${() => LilyNRoseStyles}
	${() => Sonnet98Styles}
	${() => ThawStyles}
	${() => AlexiaStyles}

	&:first-child {
		padding-top: 10rem;
	}

	& img {
		height: 100%;
		object-fit: cover;
		width: 100%
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

		& a {
			color: ${colors.white};
		}
	}
`

export default StyledFilm