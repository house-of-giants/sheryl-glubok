import React from 'react'

import { Logo } from '../SVG/Logo'
import { StyledHero } from './StyledHero'

const Hero = () => (
	<StyledHero>
		<img src="https://images.unsplash.com/photo-1534736487074-a559cde7d1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" alt=""/>
		<img src="https://images.unsplash.com/photo-1534736487074-a559cde7d1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" alt=""/>
		<img src="https://images.unsplash.com/photo-1534736487074-a559cde7d1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" alt=""/>
		<img src="https://images.unsplash.com/photo-1534736487074-a559cde7d1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" alt=""/>
		<div className="content">
			<Logo />
			<h1 className="screen-reader-text">Sheryl Glubok</h1>
			<p>Writer, Director, Story Teller</p>
		</div>
	</StyledHero>
)

export default Hero