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
			// <div className="strip">
			// 	<img src={YAMLData.column_one_img} alt=""/>
			// 	<img src={YAMLData.column_two_img} alt=""/>
			// 	<img src={YAMLData.column_three_img} alt=""/>
			// </div>
			// <div className="content">
			// 	<AboutCTATitle />
			// 	<div className="blurb">
			// 		<p>{YAMLData.body}</p>
			// 		<Button to="/about">Learn More About Sheryl</Button>
			// 	</div>
			// </div>
		</StyledContainer>
	</StyledAboutCTA>
)

export default AboutCTA