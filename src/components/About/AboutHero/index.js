import React from 'react'
import { AnimatePresence } from 'framer-motion'

// import YAMLData from "../../../content/about.yml"

import Button from '../../Button'
import { AboutHeroTitle, AboutHeroDesc } from '../../SVG'
import { StyledAboutHero } from './StyledAboutHero'
import { animPageDefault } from '../../../utils/animationDefs'

const AboutHero = () => (
	<AnimatePresence exitBeforeEnter>
		<StyledAboutHero variants={animPageDefault} initial="in" animate="normal" exit="out">
			<AboutHeroTitle />
			<div className="desc">
				<AboutHeroDesc />
			</div>
		</StyledAboutHero>
	</AnimatePresence>
)

export default AboutHero