import React, { Component, createRef } from 'react'
import { Link } from 'gatsby'
import { TweenMax } from 'gsap'

import StyledFilm from './StyledFilm'

class Film extends Component {
	constructor(props) {
		super(props);

		this.filmRef = createRef()

		this.parallaxIt = this.parallaxIt.bind(this);
	}

	parallaxIt( e, target, movement, blur ) {
		const el = target.parentNode
		const relX = e.pageX - el.offsetLeft
		const relY = e.pageY - el.offsetTop

		TweenMax.to(target, 1, {
			x: (relX - el.offsetWidth / 2) / el.offsetWidth * movement,
			y: (relY - el.offsetHeight / 2) / el.offsetHeight * movement,
			filter: `blur(${blur}px)`
		});
	}

	componentDidMount() {
		const film = this.filmRef.current;
		const els = film.querySelectorAll( `${StyledFilm} .film-wrap > *:not(.meta):not(.screen-reader-text)` )

		const setBlur = () => {
			for ( let i = 0, len = els.length; i < len; i++ ) {
				els[i].style.filter = `blur(${1 * i }px)`
			}
		}

		const handleHover = e => {
			for ( let i = 1, len = els.length; i < len + 1; i++ ) {
				this.parallaxIt( e, els[i - 1], ( -100 * ( i * .3 ) ), ( 1 * ( i - 1 ) ) )
			}
		}

		film.addEventListener( 'mouseenter', () => {
			film.addEventListener( 'mousemove', e => handleHover( e ) )
		} )

		film.addEventListener( 'mouseexit', () => {
			film.removeEventListener( 'mousemove', () => handleHover() )
		} )
	}

	render() {

		const { slug, children, title, director, date } = this.props

		return(
			<StyledFilm className={`film ${slug}`} ref={ this.filmRef } itemScope itemType="http://schema.org/Movie">
				<div className="film-wrap">
					{children}
					<div className="meta">
						<span className="screen-reader-text" itemProp="name">{title}</span>
						<span className="screen-reader-text" itemProp="director">{director}</span>
						<p itemProp="dateCreated">{date}</p>
						<p><Link to={`/films/${slug}`}>View Film</Link></p>
					</div>
				</div>
			</StyledFilm>
		)
	}
}

export default Film