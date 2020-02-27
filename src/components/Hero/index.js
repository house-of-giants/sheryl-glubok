import React from 'react'

import { Logo } from '../SVG/Logo'
import { StyledHero } from './StyledHero'

const Hero = () => (
	<StyledHero>
		<img src="/sheryl-car.jpg" alt=""/>
		<img src="/sheryl-car.jpg" alt=""/>
		<img src="/sheryl-car.jpg" alt=""/>
		<img src="/sheryl-car.jpg" alt=""/>
		<div className="wrap">
			<div className="content -overlay">
				<Logo />
				<h1 className="screen-reader-text">Sheryl Glubok</h1>
			</div>
			<div className="content">
				<p>Writer, Director, Storyteller</p>
			</div>
		</div>
	</StyledHero>
)

export default Hero