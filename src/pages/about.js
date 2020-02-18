import React from 'react'

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'
import AboutHero from '../components/About/AboutHero'

import { StyledContainer } from '../styles/global/layout'

export default () => (
	<Layout>
		<NavLogo />
		<StyledContainer>
			<AboutHero />
		</StyledContainer>
	</Layout>
)
