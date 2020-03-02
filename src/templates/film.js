import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../theme/layout'
import { StyledContainer } from '../styles/global/layout'

export default function Film({ data }) {
	const { markdownRemark: post } = data
	const { html } = post
	const { title, date, vimeo_url, thumbnail } = post.frontmatter

	return (
		<Layout>
			<StyledContainer>
				<h1>{title}</h1>
				<h2>{date}</h2>
				{vimeo_url ?
					<iframe title={title} src={`https://player.vimeo.com/video/${vimeo_url}`} width="640" height="487" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> : ''
				}
				<img src={thumbnail} alt="" />
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</StyledContainer>
		</Layout>
	)
}

export const pageQuery = graphql`
	query FilmPostByPath($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				thumbnail
				vimeo_url
			}
		}
	}
`
