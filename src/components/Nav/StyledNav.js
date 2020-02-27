import styled from 'styled-components'
import { motion } from "framer-motion"
import { colors, mq } from '../../styles/base/variables'

export const StyledNavActivator = styled.button`
	background-color: transparent;
	border: none;
	color: ${colors.white};
	cursor: pointer;
	display: block;
	font-size: 1.4rem;
	font-weight: 700;
	margin: 2rem 0 0 auto;
	mix-blend-mode: difference;
	padding-right: 4rem;
	position: fixed;
	right: 2rem;
	top: 0;
	z-index: 11;

	&::after,
	&::before {
		background-color: currentColor;
		border-radius: 3px;
		content: "";
		height: 3px;
		position: absolute;
		left: calc(100% - 30px);
		transform: translateY(0.5rem);
		transition: transform ease 300ms, color ease 300ms;
		width: 30px;
	}

	&::after {
		margin-top: 0.7rem;
	}

	&.is-active {
		color: ${colors.codGray};
		mix-blend-mode: normal;

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
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	left: 0;
	padding: 2rem;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 10;

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
		text-align: center;
		width: 100%;
	}

	& a {
		box-shadow: inset 0 0 0 rgba(76, 41, 84, 0.3);
		color: ${colors.codGray};
		display: inline-block;
		font-size: 4rem;
		font-weight: 900;
		margin: 1rem 0;
		padding: 0 1rem;
		position: relative;
		transition: box-shadow ease 300ms;

		@media( ${mq.bpLarge} ) {
			margin: 2rem 0;
		}

		&:hover {
			box-shadow: inset 0 -2.3rem 0 rgba(200, 200, 200, 0.7);
			text-decoration: none;
		}
	}
`
