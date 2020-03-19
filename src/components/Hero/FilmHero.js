import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import StyledFilmHero from './StyledFilmHero'

const FilmHero = ({ hasVideo, isVideo, showVideo, thumbnail }) => (
	<StyledFilmHero onClick={() => showVideo( ! isVideo )} hasVideo={hasVideo}>
		<img src={thumbnail} alt="" />
		{ hasVideo &&
			<Button isButton>
				<span className="screen-reader-text">Play Video</span>
			</Button>
		}
	</StyledFilmHero>
)

FilmHero.propTypes ={
	hasVideo: PropTypes.bool.isRequired,
	isVideo: PropTypes.bool.isRequired,
	showVideo: PropTypes.func.isRequired,
	thumbnail: PropTypes.string.isRequired,
}

export default FilmHero