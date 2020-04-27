import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SEO from '../SEO'

const Head = ({ pageMeta }) => {
	const { title, thumbnail = '/social-image.png' } = pageMeta

	return(
		<>
			<SEO title={title} image={thumbnail} pathname={window.location.pathname} />
			<Helmet>
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet" />
				<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎥</text></svg>" />
			</Helmet>
		</>
	)
}

Head.propTypes = {
	pageMeta: PropTypes.shape({
		title: PropTypes.string,
		thumbnail: PropTypes.string,
	}),
}

export default Head