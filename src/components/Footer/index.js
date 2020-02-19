import React from 'react'
import styled from 'styled-components';

import { StyledContainer } from '../../styles/global/layout'

const today = new Date();

const StyledFooter = styled.footer`
	padding-bottom: 3rem;
	padding-top: 5rem;

	p {
		font-size: 0.875rem;
	}
`

const Footer = () => (
	<StyledContainer>
		<StyledFooter>
				<p>Sheryl Glubok &copy; {today.getFullYear()}</p>
		</StyledFooter>
	</StyledContainer>
)

export default Footer