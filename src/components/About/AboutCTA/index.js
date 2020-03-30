import React from 'react'
import PropTypes from 'prop-types'

import { Logo, AboutCTATitle } from '../../SVG'
import { StyledContainer } from '../../../styles/global/layout'
import { StyledAboutCTA } from './StyledAboutCTA'
import Button from '../../Button'

const AboutCTA = (props) => {
	const { column_one_img, column_two_img, column_three_img, home_body, home_button_label } = props.data

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
						<p>{home_body}</p>
						<Button to="/about">{ home_button_label ? home_button_label : 'Learn More About Sheryl' }</Button>
					</div>
				</div>
			</StyledContainer>
		</StyledAboutCTA>
	)
}

AboutCTA.propTypes = {
	data: PropTypes.shape({
		column_one_img: PropTypes.string.isRequired,
		column_two_img: PropTypes.string.isRequired,
		column_three_img: PropTypes.string.isRequired,
		home_body: PropTypes.string.isRequired,
		home_button_label: PropTypes.string,
	})
}

export default AboutCTA