import React from 'react'

// import YAMLData from "../content/about.yml"

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'
import AboutHero from '../components/About/AboutHero'

import { StyledContainer } from '../styles/global/layout'
import { animPageDefault } from '../utils/animationDefs'
import { AnimatePresence, motion } from 'framer-motion'

export default () => (
	<Layout pageMeta={{ title: 'About' }}>
		<NavLogo />
		<StyledContainer>
			<AboutHero />
		</StyledContainer>
		<StyledContainer narrow>
			<AnimatePresence exitBeforeEnter>
				<motion.div className="wrap" variants={animPageDefault} initial="in" animate="normal" exit="out">
					<h2>Stories</h2>
				</motion.div>
			</AnimatePresence>
		</StyledContainer>
	</Layout>
)
