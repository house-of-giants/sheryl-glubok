import React from 'react'
import Helmet from 'react-helmet'

const Head = () => (
	<Helmet>
		{/* <!-- Primary Meta Tags --> */}
		<meta name="title" content="Sheryl Glubok | Writer, Director, Storyteller" />>
		<meta name="description" content="Sheryl Glubok is a Writer, Director and Storyteller. " />

		{/* <!-- Open Graph / Facebook --> */}
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://metatags.io/" />
		<meta property="og:title" content="Sheryl Glubok | Writer, Director, Storyteller" />
		<meta property="og:description" content="Sheryl Glubok is a Writer, Director and Storyteller. " />
		<meta property="og:image" content="/sheryl-meta.png" />

		{/* <!-- Twitter --> */}
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="https://metatags.io/" />
		<meta property="twitter:title" content="Sheryl Glubok | Writer, Director, Storyteller" />
		<meta property="twitter:description" content="Sheryl Glubok is a Writer, Director and Storyteller. " />
		<meta property="twitter:image" content="/sheryl-meta.png" />

		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet" />>
	</Helmet>
)

export default Head