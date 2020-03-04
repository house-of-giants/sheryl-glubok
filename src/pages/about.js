import React from 'react'

import YAMLData from "../content/about.yml"

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'
import AboutHero from '../components/About/AboutHero'

import { StyledContainer } from '../styles/global/layout'
import { animPageDefault } from '../utils/animationDefs'
import { AnimatePresence, motion } from 'framer-motion'

export default () => (
	<Layout>
		<NavLogo />
		<StyledContainer>
			<AboutHero />
		</StyledContainer>
		<StyledContainer narrow>
			<AnimatePresence>
				<motion.div className="wrap" variants={animPageDefault} initial="in" animate="normal" exit="out" >
					<h2>Stories</h2>
					{ YAMLData.stories.map( story => (
							<div key={story.id}>
								<h3>{story.story_title}</h3>
								<p>{story.story_excerpt}</p>
							</div>
						))
					}
				</motion.div>
			</AnimatePresence>
		</StyledContainer>
	</Layout>
)
