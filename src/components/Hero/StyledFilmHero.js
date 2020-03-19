import styled from 'styled-components'
import { colors } from '../../styles/base/variables'

const StyledFilmHero = styled.div`
	align-items: center;
	cursor: ${props => props.hasVideo ? 'pointer' : 'default'};
	display: flex;
	height: calc(100vh - 10rem);
	justify-content: center;
	padding-bottom: 4rem;
	position: relative;

	&:hover {
		& button {
			background-color: transparent;
			border-color: currentColor;
			color: ${colors.white};
		}
	}

	& img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	& button {
		border-color: currentColor;
		border-radius: 50%;
		border-width: 5px;
		color: ${colors.black};
		height: 114px;
		position: absolute;
		transition: 300ms border-color ease, 300ms color ease;
		width: 114px;

		&::after {
			border-style: solid;
			border-width: 26px 0 26px 45px;
			border-color: transparent transparent transparent currentColor;
			content: "";
			display: block;
			height: 0;
			transform: translateX(-8px);
			width: 0;
		}
	}
`

export default StyledFilmHero