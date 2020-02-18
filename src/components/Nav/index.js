import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'
import { AnimatePresence } from 'framer-motion'
import { TweenMax } from 'gsap'

import { StyledContainer } from '../../styles/global/layout'
import { StyledNav, StyledNavActivator } from './StyledNav'

const Nav = () => {
	let navRef = useRef( 0 )
	const [ isToggled, setToggled ] = useState(false)

	const toggleNav = () => setToggled(!isToggled)

	const gsapBlur = () => {
		const el = navRef.current
		const blurElement = { a: isToggled ? 10 : 0 }
		TweenMax
			.fromTo( blurElement, 0.2, { a: isToggled ? 10 : 0 }, { a: isToggled ? 0 : 10 } )
			.eventCallback( 'onUpdate', () => {
			TweenMax.set( el, { filter: `blur(${blurElement.a}px)` } )
		} )
	}

	return(
		<div>
			<StyledContainer>
				<StyledNavActivator onClick={ toggleNav } className={isToggled ? 'is-active' : ''} >Menu</StyledNavActivator>
				<AnimatePresence>
					{ isToggled &&
						<StyledNav ref={ navRef } onUpdate={ gsapBlur } initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<a href="#">Films</a>
								</li>
								<li>
									<Link to="/about">About</Link>
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