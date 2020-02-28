import React from 'react'
import { Link } from 'gatsby'
import { AnimatePresence, motion, useCycle } from 'framer-motion'

import { StyledContainer } from '../../styles/global/layout'
import { StyledNav, StyledNavActivator, animWrap, animList, animItem } from './StyledNav'

const Nav = () => {
	const [ isToggled, setToggled ] = useCycle(false, true)

	const toggleNav = () => setToggled(!isToggled)

	const pages = [ 'Home', 'Films', 'About', 'Blog' ]

	return(
		<div>
			<StyledContainer>
				<StyledNavActivator onClick={ toggleNav } className={isToggled ? 'is-active' : ''} >Menu</StyledNavActivator>
				<AnimatePresence exitBeforeEnter>
					{ isToggled &&
						<StyledNav variants={animWrap} initial="hidden" animate="visible" exit="hidden">
							<motion.ul variants={animList}>
								{ pages.map( (page, i) => (
									<motion.li variants={animItem} i={i} key={page}>
										<Link to={`/${page === 'Home' ? '' : page.toLowerCase()}`}>{page}</Link>
									</motion.li>
								) ) }
							</motion.ul>
						</StyledNav>
					}
				</AnimatePresence>
			</StyledContainer>
		</div>
	)
}

export default Nav