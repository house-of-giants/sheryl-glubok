import styled from 'styled-components'
import { motion } from 'framer-motion'
import { bpMedium } from '../../styles/base/variables'

const gapHor = '10px'
const time = '6000ms'
const delay = '2000ms'

export const StyledHero = styled(motion.div)`
	align-items: center;
	background-color: #40263f;
	display: flex;
	justify-content: center;
	position: relative;
	height: 100vh;
	margin-bottom: 5rem;

	& img {
		height: 100%;
		object-fit: cover;
		mix-blend-mode: hard-light;
		object-position: top center;
		opacity: 0.7;
		position: absolute;
		width: 100%;
	}

	& .content {
		padding: 0 2rem;
		width: 60vw;
		z-index: 1;

		& p {
			display: inline-block;
			font-size: 1rem;
			letter-spacing: 0.5rem;
			position: relative;

			@media(${bpMedium}) {
				font-size: 1.5rem;
			}
		}
	}

	& .logo {
		animation-name: glitch-text;
		animation-delay: calc(${delay} * 2);
		animation-duration: ${time};
		animation-direction: forwards;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		fill: pink;
		overflow: visible;
	}

	& .words {
		color: pink;
		display: grid;
		grid-template-columns: repeat(3, 1fr);

		& span:nth-child(2) {
			align-self: end;
			grid-column: 2;
			grid-row: 1;
		}

		& span:nth-child(3) {
			grid-column: 3;
			grid-row: 3;
		}
	}

	& .line {
		background-color: pink;
		height: 35vh;
		position: absolute;
		right: 20%;
		top: 100%;
		width: 1px;

		@media(${bpMedium}) {
			right: -3rem;
		}

		& path {
			height: 35vh;
		}
	}

	@keyframes glitch-text {
		0% {
			transform: translate3d(calc(-1 * ${gapHor}),0,0) scale3d(-1,-1,1);
			clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
		}
		2% {
			clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
		}
		4% {
			clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
		}
		5% {
			clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
		}
		6% {
			clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
		}
		7% {
			clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
		}
		8% {
			clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
		}
		9% {
			clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
		}
		9.9% {
			transform: translate3d(calc(-1 * ${gapHor}),0,0) scale3d(-1,-1,1);
		}
		10%, 100% {
			transform: translate3d(0,0,0) scale3d(1,1,1);
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		}
	}
`
