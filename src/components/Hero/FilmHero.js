import React from 'react'
import PropTypes from 'prop-types'

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

FilmHero.propTypes ={
	isVideo: PropTypes.bool.isRequired,
	showVideo: PropTypes.func.isRequired,
	thumbnail: PropTypes.string.isRequired,
}

export default FilmHero