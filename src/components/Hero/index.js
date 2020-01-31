import React from 'react'

import { Logo } from '../SVG/Logo'
import { StyledHero } from './StyledHero'

const Hero = () => (
	<StyledHero>
		<img src="/hero_bg.jpg" alt=""/>
		<img src="/hero_bg.jpg" alt=""/>
		<img src="/hero_bg.jpg" alt=""/>
		<img src="/hero_bg.jpg" alt=""/>
		<div className="content">
			<Logo />
			<h1 className="screen-reader-text">Sheryl Glubok</h1>
			<p>Writer, Director, Story Teller</p>
		</div>
	</StyledHero>
)

export default Hero