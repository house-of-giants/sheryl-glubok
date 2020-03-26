import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { TweenMax } from 'gsap'

import StyledFilm from './StyledFilm'

const parallaxIt = ( e, target, movement, blur ) => {
	const el = target.parentNode
	const relX = e.pageX - el.offsetLeft
	const relY = e.pageY - el.offsetTop

	TweenMax.to(target, 1, {
		x: (relX - el.offsetWidth / 2) / el.offsetWidth * movement,
		y: (relY - el.offsetHeight / 2) / el.offsetHeight * movement,
		filter: `blur(${blur}px)`
	});
}

const Film = ( { slug, children, title, director, date } ) => {
	const filmRef = useRef( null );

	useEffect( () => {
		const film = filmRef.current;
		const els = film.querySelectorAll( `${StyledFilm} .film-wrap > *:not(.meta):not(.screen-reader-text)` )

		const handleHover = e => {
			for ( let i = 1, len = els.length; i < len + 1; i++ ) {
				parallaxIt( e, els[i - 1], ( -100 * ( i * .3 ) ), ( 1 * ( i - 1 ) ) )
			}
		}

		film.addEventListener( 'mouseenter', () => {
			film.addEventListener( 'mousemove', e => handleHover( e ) )
		} )

		film.addEventListener( 'mouseexit', () => {
			film.removeEventListener( 'mousemove', () => handleHover() )
		} )
	} )

	return(
		<StyledFilm className={`film ${slug}`} ref={ filmRef } itemScope itemType="http://schema.org/Movie">
			<Link to={`/films/${slug}`} className="film-wrap">
				{children}
				<div className="meta">
					<span className="screen-reader-text" itemProp="name">{title}</span>
					<span className="screen-reader-text" itemProp="director">{director[0]}</span>
					<p itemProp="dateCreated">{date}</p>
					<p>View Film</p>
				</div>
			</Link>
		</StyledFilm>
	)
}

Film.propTypes = {
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	director: PropTypes.array.isRequired,
	date: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
}

export default Film