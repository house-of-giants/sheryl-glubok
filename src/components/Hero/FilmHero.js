import React from 'react'

import Button from '../Button'
import StyledFilmHero from './StyledFilmHero'

const FilmHero = ({ isVideo, showVideo, thumbnail }) => (
	<StyledFilmHero onClick={() => showVideo( ! isVideo )}>
		<img src={thumbnail} alt="" />
		<Button isButton>
			<span className="screen-reader-text">Play Video</span>
		</Button>
	</StyledFilmHero>
)

export default FilmHero