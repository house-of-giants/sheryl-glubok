import React from 'react'

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'

import { StyledContainer } from '../styles/global/layout'
import { animPageDefault } from '../utils/animationDefs'
import { AnimatePresence, motion } from 'framer-motion'

export default () => (
	<Layout pageMeta={{ title: 'Thank You' }}>
		<NavLogo />
		<StyledContainer narrow>
			<AnimatePresence>
				<motion.div className="wrap" variants={animPageDefault} initial="in" animate="normal" exit="out" >
					<h2>Thank You</h2>
					<p>Thank you for getting in touch! Sheryl will be in contact as soon as she can.</p>
				</motion.div>
			</AnimatePresence>
		</StyledContainer>
	</Layout>
)
