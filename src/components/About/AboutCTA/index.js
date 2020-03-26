import React from 'react'
import PropTypes from 'prop-types'

import { Logo, AboutCTATitle } from '../../SVG'
import { StyledContainer } from '../../../styles/global/layout'
import { StyledAboutCTA } from './StyledAboutCTA'
import Button from '../../Button'

const AboutCTA = (props) => {
	const { column_one_img, column_two_img, column_three_img, body } = props.data[0]

	return (
		<StyledAboutCTA>
			<StyledContainer>
				<Logo />
				<div className="strip">
					<img src={column_one_img} alt=""/>
					<img src={column_two_img} alt=""/>
					<img src={column_three_img} alt=""/>
				</div>
				<div className="content">
					<AboutCTATitle />
					<div className="blurb">
						<p>{body}</p>
						<Button to="/about">Learn More About Sheryl</Button>
					</div>
				</div>
			</StyledContainer>
		</StyledAboutCTA>
	)
}

AboutCTA.propTypes ={
	data: PropTypes.array.isRequired
}

export default AboutCTA