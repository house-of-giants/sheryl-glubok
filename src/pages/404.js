import React from 'react'

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'

import { StyledContainer } from '../styles/global/layout'
import { animPageDefault } from '../utils/animationDefs'
import { AnimatePresence, motion } from 'framer-motion'

export default ({ location }) => (
	<Layout pageMeta={{ title: 'Thank You' }} pathname={location.pathname}>
		<NavLogo />
		<StyledContainer narrow>
			<AnimatePresence exitBeforeEnter>
				<motion.div className="wrap" variants={animPageDefault} initial="in" animate="normal" exit="out" >
					<div className="blockquote"><h1>404</h1></div>
					<p>Looks like the page you're looking for doesn't exist. Try navigating to another page.</p>
				</motion.div>
			</AnimatePresence>
		</StyledContainer>
	</Layout>
)
