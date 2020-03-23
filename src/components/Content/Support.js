import React from 'react'
import { SupportTitle } from '../SVG'
import ContactForm from './ContactForm'
import styled from 'styled-components'
import { StyledContainer } from '../../styles/global/layout'
import { colors, mq } from '../../styles/base/variables'

const StyledSupport = styled.div`

	@media(${mq.bpLarge}) {
		background: linear-gradient(to top, ${colors.white} 70%, transparent 70%);
	}

	& svg {
		max-width: 485px;
		padding: 0 1rem;
		width: 100%;
	}

	& .content {
		background-color: ${colors.white};
		display: grid;
		grid-gap: 2rem;
		margin-top: 2rem;
		padding: 2rem 1rem 0;

		@media(${mq.bpLarge}) {
			background-color: transparent;
			grid-gap: 8rem;
			grid-template-columns: 2fr 423px;
			margin-top: 0;
			padding-top: 0;
			transform: translateY(-100px);
		}

		& img {
			order: 0;
			margin: 0 auto;
			max-width: 300px;
			object-fit: cover;
			width: 100%;

			@media(${mq.bpLarge}) {
				max-width: none;
				order: 0;
			}
		}
	}

	& form {
		align-self: end;
		order: 1;

		@media(${mq.bpLarge}) {
			order: 0;
		}
	}

	& .form-group:nth-of-type(1),
	& .form-group:nth-of-type(2) {
		@media(${mq.bpLarge}) {
			clear: none;
			float: left;
			width: calc(50% - 2rem);
		}
	}

	& .form-group:nth-of-type(1) {
		@media(${mq.bpLarge}) {
			margin-right: 2rem;
		}
	}

	& .form-group:nth-of-type(2) {
		@media(${mq.bpLarge}) {
			margin-left: 2rem;
		}
	}

	& .form-group {
		clear: both;
	}

	& p:last-of-type {
		@media(${mq.bpLarge}) {
			margin-bottom: 0;
		}
	}
`

const Support = () => (
	<StyledSupport id="support">
		<StyledContainer>
			<SupportTitle />
		</StyledContainer>
		<StyledContainer>
			<div className="content">
				<ContactForm invert />
				<img src="/in-the-fishbowl.jpg" alt="" />
			</div>
		</StyledContainer>
	</StyledSupport>
)

export default Support
