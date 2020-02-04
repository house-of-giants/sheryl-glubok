import React from 'react'
import { Link } from 'gatsby'

import StyledFilm from './StyledFilm'

const Film = ({ children, title, director, date, slug }) => (
	<StyledFilm className={`film ${slug}`} itemScope itemType="http://schema.org/Movie">
		{children}
		<div className="meta">
			<span className="screen-reader-text" itemProp="name">{title}</span>
			<span className="screen-reader-text" itemProp="director">{director}</span>
			<p itemProp="dateCreated">{date}</p>
			<p><Link to={`/films/${slug}`}>View Film</Link></p>
		</div>
	</StyledFilm>
)

export default Film