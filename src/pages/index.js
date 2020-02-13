import React from 'react'

import Layout from '../theme/layout'
import Hero from '../components/Hero'
import Stage from '../components/Stage'

import { StyledContainer } from '../styles/global/layout'

export default () => (
	<Layout>
		<Hero />
		{/*<StyledContainer>*/}
			<Stage />
		{/*</StyledContainer>*/}
	</Layout>
)
