import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'

import Button from '../../Button'
import { AboutHeroTitle, AboutHeroDesc } from '../../SVG'
import { StyledAboutHero } from './StyledAboutHero'
import { animPageDefault } from '../../../utils/animationDefs'

const AboutHero = ({ data }) => {
	const { intro, intro_image, button_link, button_label } = data
	
	return (
		<AnimatePresence exitBeforeEnter>
			<StyledAboutHero variants={animPageDefault} initial="in" animate="normal" exit="out">
				<AboutHeroTitle />
				<p className="blurb">{intro}</p>
				<div className="cta">
					<Button to={button_link ? button_link : '/contact'}>{button_label ? button_label : 'Contact Sheryl'}</Button>
				</div>
				<div className="image">
					<img src={intro_image} alt=""/>
				</div>
				<div className="desc">
					<AboutHeroDesc />
				</div>
			</StyledAboutHero>
		</AnimatePresence>
	)
}

AboutHero.propTypes ={
	data: PropTypes.shape({
		intro: PropTypes.string.isRequired,
		intro_image: PropTypes.string.isRequired,
		button_label: PropTypes.string,
		button_link: PropTypes.string,
	})
}

export default AboutHero