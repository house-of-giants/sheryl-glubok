import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { StyledContainer } from '../../styles/global/layout'
import { colors, mq } from '../../styles/base/variables'
import Button from '../Button'

const StyledSupportCTA = styled.div`
	align-items: center;
	display: flex;
	padding-bottom: 4rem;
	justify-content: center;

	@media(${mq.bpMedium}) {
		display: inline-flex;
	}

	& .heading {
		box-shadow: inset 0 -0.9rem 0  ${colors.cosmic};
		font-size: 2.333rem;
		font-weight: 900;
		letter-spacing: 3.5px;
		margin: 0;
		padding: 0 1rem;
		text-align: center;

		@media(${mq.bpMedium}) {
			float: left;
			margin-right: 2rem;
		}
	}

	& .btn {
		clear: both;
		margin-top: 2rem;
		width: 100%;

		@media(${mq.bpMedium}) {
			clear: none;
			margin-top: 0;
			width: auto;
		}
	}
`

const SupportCTA = () => (
	<StyledSupportCTA>
		<StyledContainer>
			<h3 className="heading">Help support the film</h3>
			<Button isButton onClick={() => navigate('#support')}><span aria-label="Skip to support form">Learn More</span></Button>
		</StyledContainer>
	</StyledSupportCTA>
)

export default SupportCTA
