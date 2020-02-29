import React from 'react'

import { Logo } from '../SVG/Logo'
import { StyledHero } from './StyledHero'
import { AnimatePresence, motion } from 'framer-motion'
import { animPageDefault } from '../../utils/animationDefs'

const Hero = () => (
	<AnimatePresence exitBeforeEnter>
		<StyledHero variants={animPageDefault} initial="in" animate="normal" exit="out">
			<img src="https://images.unsplash.com/photo-1523251451807-aaf1c84d0591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt=""/>
			<div className="wrap">
				<motion.div className="content -difference" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.7 }}>
					<Logo />
					<h1 className="screen-reader-text">Sheryl Glubok</h1>
				</motion.div>
				<motion.div className="content -difference" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 1.7 }}>
					<p aria-label="Writer, Director, Storyteller">
						<span className="words" aria-hidden="true">
							<span>Writ-<br />er,</span><span>Director,</span><span>S<br />t<br />o<br />ryteller</span>
						</span>
						<motion.div className="line" style={{ originX: 0.5, originY: 0 }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} transition={{ duration: 1.7, delay: 2 }} />
					</p>
				</motion.div>
			</div>
		</StyledHero>
	</AnimatePresence>
)

export default Hero