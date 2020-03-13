import React from 'react'
import { AnimatePresence } from 'framer-motion'

import YAMLData from "../../../content/about.yml"

import Button from '../../Button'
import { AboutHeroTitle, AboutHeroDesc } from '../../SVG'
import { StyledAboutHero } from './StyledAboutHero'
import { animPageDefault } from '../../../utils/animationDefs'

const AboutHero = () => (
	<AnimatePresence exitBeforeEnter>
		<StyledAboutHero variants={animPageDefault} initial="in" animate="normal" exit="out">
			<AboutHeroTitle />
			<p className="blurb">{YAMLData.intro}</p>
			<div className="cta">
				<Button to={YAMLData.button_link ? YAMLData.button_link : '/contact'}>{YAMLData.button_label ? YAMLData.button_label : 'Contact Sheryl'}</Button>
			</div>
			<div className="image">
				<img src={YAMLData.intro_image} alt=""/>
			</div>
			<div className="desc">
				<AboutHeroDesc />
			</div>
		</StyledAboutHero>
	</AnimatePresence>
)

export default AboutHero