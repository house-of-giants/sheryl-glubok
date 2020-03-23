import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'
import ContactForm from '../components/Content/ContactForm'

import { animPageDefault } from '../utils/animationDefs'
import { StyledContainer } from '../styles/global/layout'


export default () => (
	<Layout pageMeta={{ title: 'Contact' }}>
		<NavLogo />
		<StyledContainer>
			<AnimatePresence exitBeforeEnter>
				<motion.div className="wrap" variants={animPageDefault} initial="in" animate="normal" exit="out" >
					<h2>Contact Sheryl</h2>
					<ContactForm interests />
				</motion.div>
			</AnimatePresence>
		</StyledContainer>
	</Layout>
)
