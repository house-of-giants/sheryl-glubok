import React from 'react'

// import YAMLData from "../../../content/home.md"

import { Logo, AboutCTATitle } from '../../SVG'
import { StyledContainer } from '../../../styles/global/layout'
import { StyledAboutCTA } from './StyledAboutCTA'
import Button from '../../Button'

const AboutCTA = () => (
	<StyledAboutCTA>
		<StyledContainer>
			<Logo />
		</StyledContainer>
	</StyledAboutCTA>
)

export default AboutCTA