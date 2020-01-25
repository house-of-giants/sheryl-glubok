import React from 'react'
import { graphql } from 'gatsby'

const Post = ({ data: { prismicBlogPost } }) => {
	const { data } = prismicBlogPost
	return (
		<React.Fragment>
			<h1>{data.post_title.text}</h1>
			<div dangerouslySetInnerHTML={{ __html: data.post_content.html }} />
		</React.Fragment>
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