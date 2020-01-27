import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../theme/layout'

import { StyledContainer } from '../styles/global/layout'

const Post = ({ data: { prismicBlogPost } }) => {
	const { data } = prismicBlogPost
	return (
		<Layout>
			<StyledContainer>
				<h1>{data.post_title.text}</h1>
				<div dangerouslySetInnerHTML={{ __html: data.post_content.html }} />
			</StyledContainer>
		</Layout>
	)
}

export default Post

export const pageQuery = graphql`
	query PostBySlug($uid: String!) {
		prismicBlogPost(uid: { eq: $uid }) {
			uid
			data {
				post_title {
					text
				}
				post_content {
					html
				}
			}
		}
	}
`