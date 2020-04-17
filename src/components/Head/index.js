import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import useSiteMeta from '../../utils/useSiteMeta'

const Head = ({ pageMeta }) => {
	const { siteURL, description } = useSiteMeta()
	const { title, thumbnail = '/social-image.png' } = pageMeta

	return(
		<Helmet>
			<title>{`Sheryl Glubok | ${title}`}</title>
			{/* <!-- Primary Meta Tags --> */}
			<meta name="title" content={`Sheryl Glubok | ${title}`} />
			<meta name="description" content={description} />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${siteURL}`} />
			<meta property="og:title" content={`Sheryl Glubok | ${title}`} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={thumbnail} />

			{/* <!-- Twitter --> */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={`${siteURL}`}  />
			<meta name="twitter:title" content={`Sheryl Glubok | ${title}`} />
			<meta name="twitter:description" content={`Sheryl Glubok | ${title}`} />
			<meta name="twitter:image" content={thumbnail} />

			<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet" />
			<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎥</text></svg>" />
		</Helmet>
	)
}

Head.propTypes = {
	pageMeta: PropTypes.shape({
		title: PropTypes.string,
		thumbnail: PropTypes.string,
	}),
}

export default Head