import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

import { StyledContainer } from '../styles/global/layout'
import { StyledNav, StyledNavActivator } from '../styles/components/navigation'

const Nav = () => {
	const [ isToggled, setToggled ] = useState(false)
	const toggleNav = () => setToggled(!isToggled)

	return(
		<div>
			<StyledContainer>
				<StyledNavActivator onClick={ toggleNav } className={isToggled ? 'is-active' : ''} >Menu</StyledNavActivator>
				<AnimatePresence>
					{ isToggled &&
						<StyledNav key="nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
							<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
								<filter id="blur">
									<motion.feGaussianBlur key="blur" initial={{ stdDeviation: [0, 5, 0] }} animate={{ stdDeviation: [0, 0, 0] }} exit={{ stdDeviation: [0, 5, 0] }} />
								</filter>
							</svg>
							<ul>
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">Films</a>
								</li>
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Blog</a>
								</li>
							</ul>
						</StyledNav>
					}
				</AnimatePresence>
			</StyledContainer>
		</div>
	)
}

export default Nav