import React from 'react'
import Helmet from 'react-helmet'

import useSiteMeta from '../../utils/useSiteMeta'

const Head = ({ pageMeta }) => {
	const { siteURL, description } = useSiteMeta();

	const pageTitle = pageMeta.title ? pageMeta.title : 'Writer, Director, Storyteller'
	const pageThumb = pageMeta.thumbnail ? pageMeta.thumbnail : '/social-image'

	return(
		<Helmet>
			<title>Sheryl Glubok | {pageTitle}</title>
			{/* <!-- Primary Meta Tags --> */}
			<meta name="title" content={`Sheryl Glubok | ${pageTitle}`} />
			<meta name="description" content={description} />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${siteURL}`} />
			<meta property="og:title" content={`Sheryl Glubok | ${pageTitle}`} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={pageThumb} />

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={`${siteURL}`} />
			<meta property="twitter:title" content={`Sheryl Glubok | ${pageTitle}`} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={pageThumb} />

			<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet" />>
		</Helmet>
	)
}

export default Head