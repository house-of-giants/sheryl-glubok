import React from 'react'

import Layout from '../theme/layout'
import Hero from '../components/Hero'
import NavLogo from '../components/Nav/NavLogo'
import Fishbowl from '../components/Films/Fishbowl'
import LilyNRose from '../components/Films/LilyNRose'
import Sonnet98 from '../components/Films/Sonnet98'
import Thaw from '../components/Films/Thaw'
import Alexia from '../components/Films/Alexia'
import About from '../components/About'

import { StyledContainer } from '../styles/global/layout'

export default () => (
	<Layout>
		<Hero />
		<NavLogo />
		<StyledContainer>
			<Fishbowl />
			<LilyNRose />
			<Sonnet98 />
			<Thaw />
			<Alexia />
		</StyledContainer>
		<About />
	</Layout>
)
