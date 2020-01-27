import styled from 'styled-components'
import { motion } from "framer-motion"
import { colors } from '../base/variables'

export const StyledNavActivator = styled.button`
	background-color: transparent;
	border: none;
	color: ${colors.white};
	cursor: pointer;
	display: block;
	font-size: 1.4rem;
	font-weight: 700;
	margin: 2rem 0 0 auto;
	padding-right: 4rem;
	position: sticky;
	top: 0;
	z-index: 5;

	&::after,
	&::before {
		background-color: ${colors.white};
		border-radius: 3px;
		content: "";
		height: 3px;
		position: absolute;
		left: calc(100% - 30px);
		transform: translateY(0.5rem);
		transition: transform ease 300ms;
		width: 30px;
	}

	&::after {
		margin-top: 0.7rem;
	}

	&.is-active {
		&::before {
			transform: translateY(0.8rem) rotate(45deg);
		}

		&::after {
			transform: translateY(0.1rem) rotate(-45deg);
		}
	}
`

export const StyledNav = styled(motion.nav)`
	backface-visibility: hidden;
	background-color: #efefef;
	box-sizing: border-box;
	display: flex;
	filter: url(#blur);
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	left: 0;
	padding: 2rem;
	position: fixed;
	top: 0;
	width: 100vw;

	& svg {
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
	}

	& ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	& li {
		width: 100%;
	}

	& a {
		color: ${colors.black};
		display: block;
		font-size: 4rem;
		font-weight: 900;
		padding: 2rem 0;
		text-align: center;
		width: 100%;
	}
`
