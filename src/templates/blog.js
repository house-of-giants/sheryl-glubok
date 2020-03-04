import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../theme/layout'
import { StyledContainer } from '../styles/global/layout'

export default function Post({ data }) {
	const { markdownRemark: post } = data
	const { html } = post
	const { title, date, thumbnail } = post.frontmatter

	return (
		<Layout pageMeta={{ title, thumbnail }}>
			<StyledContainer>
				<h1>{title}</h1>
				<h2>{date}</h2>
				<img src={thumbnail} alt="" />
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</StyledContainer>
		</Layout>
	)
}

export const pageQuery = graphql`
	query BlogPostByPath($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				thumbnail
			}
		}
	}
`
