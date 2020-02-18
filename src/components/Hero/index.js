import React from 'react'

import { Logo } from '../SVG/Logo'
import { StyledHero } from './StyledHero'

const Hero = ( props ) => (
	<StyledHero>
		<img src="https://images.unsplash.com/photo-1534736487074-a559cde7d1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80g" alt=""/>
		<img src="https://images.unsplash.com/photo-1534736487074-a559cde7d1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80g" alt=""/>
		<img src="https://images.unsplash.com/photo-1534736487074-a559cde7d1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80g" alt=""/>
		<img src="https://images.unsplash.com/photo-1534736487074-a559cde7d1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80g" alt=""/>
		<div className="content">
			{ props.logo ?
				<Logo /> : ''
			}
			{ props.title ?
				<span>
					<h1 className="screen-reader-text">{ props.title }</h1>
					<h1>{ props.title }</h1>
				</span> : ''
			}
			{ props.content ?
				<span>
					<p>{ props.content }</p>
				</span> : ''
			}
		</div>
	</StyledHero>
)

export default Hero