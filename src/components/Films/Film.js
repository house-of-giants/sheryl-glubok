import React from 'react'
import { Link } from 'gatsby'

import StyledFilm from './StyledFilm'

const Film = React.forwardRef( ( { children, title, director, date, slug, color }, ref ) => {
	return(
		<StyledFilm className="film" itemScope itemType="http://schema.org/Movie" data-color={color} ref={ ref }>
			<div className={`film-wrap ${slug}`}>
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
} )

export default Film