import React from 'react'

import Layout from '../theme/layout'
import Hero from '../components/Hero'
import Fishbowl from '../components/Films/Fishbowl'
import LilyNRose from '../components/Films/LilyNRose'
import Sonnet98 from '../components/Films/Sonnet98'
import Thaw from '../components/Films/Thaw'
import Alexia from '../components/Films/Alexia'

import { StyledContainer } from '../styles/global/layout'

export default () => (
	<Layout>
		<Hero logo={true} content="Writer, Director, Storyteller" />
		<StyledContainer>
			<Fishbowl />
			<LilyNRose />
			<Sonnet98 />
			<Thaw />
			<Alexia />
		</StyledContainer>
	</Layout>
)
