import React, { useState } from 'react'
import { Link } from 'gatsby'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { TweenMax } from 'gsap'

import { StyledContainer } from '../../styles/global/layout'
import { StyledNav, StyledNavActivator } from './StyledNav'

const Nav = () => {
	const [ isToggled, setToggled ] = useCycle(false, true)

	const toggleNav = () => setToggled(!isToggled)

	const wrap = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 }
	}

	const list = {
		visible: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 }
		},
		hidden: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 }
		}
	}

	const item = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 }
			}
		},
		hidden: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 }
			}
		}
	}

	const pages = [ 'Home', 'Films', 'About', 'Blog' ]

	return(
		<div>
			<StyledContainer>
				<StyledNavActivator onClick={ toggleNav } className={isToggled ? 'is-active' : ''} >Menu</StyledNavActivator>
				<AnimatePresence>
					{ isToggled &&
						<StyledNav variants={wrap} initial="hidden" animate="visible" exit="hidden">
							<motion.ul variants={list}>
								{ pages.map( (page, i) => (
									<motion.li variants={item} i={i} key={page}>
										<Link to={`/${page.toLowerCase()}`}>{page}</Link>
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