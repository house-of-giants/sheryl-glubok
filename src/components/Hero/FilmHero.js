import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import StyledFilmHero from './StyledFilmHero'
import ResponsiveImg from '../Content/ResponsiveImg'

const FilmHero = ({ hasVideo, isVideo, showVideo, thumbnail }) => (
	<StyledFilmHero onClick={() => showVideo( ! isVideo )} hasVideo={hasVideo}>
		<ResponsiveImg src={thumbnail} params="ar_16:9,c_fill,g_center/c_scale,w_auto/c_limit,w_1365,h_831" />
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