import React from 'react'

const ResponsiveImg = ( { className, src, alt = "", params = "ar_16:9,c_fill,g_face/c_scale,w_auto/c_limit,w_1000" } ) => {
	const baseURL = new URL(window.location.href)
	const { protocol, host } = baseURL
	const formattedURL = host === 'localhost:8000' ? 'https://compassionate-lamarr-33dd20.netlify.com' : `${protocol}//${host}`
	const thumb = src ? `${formattedURL}${src}` : 'https://source.unsplash.com/user/claudiotesta/1350x478'
	return (
		<img
			className={className}
			src={`https://res.cloudinary.com/houseofgiants/image/fetch/${params}/${thumb}`}
			sizes="100vw"
			alt={alt}
		/>
	)
}

export default ResponsiveImg