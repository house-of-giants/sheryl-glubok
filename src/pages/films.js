import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../theme/layout'
import PostItem from '../components/Blog/PostItem'
import NavLogo from '../components/Nav/NavLogo'

import { StyledBlogContainer } from '../styles/global/layout'

export default function Blog({ data }) {
	const { edges: posts } = data.allMarkdownRemark

	return (
		<Layout pageMeta={{ title: 'Films' }}>
			<NavLogo />
			<StyledBlogContainer itemScope itemType="https://schema.org/Blog">
				<div className="blog-heading">
					<h1 className="screen-reader-text">Films</h1>
					<h1>Films</h1>
				</div>
				<div className="blog-wrap">
					{ posts
						.filter(edge => edge.node.fields.layout === 'film')
						.map(({ node: post }) =>
							<PostItem key={post.id} post={post} />
						)
					}
				</div>
			</StyledBlogContainer>
		</Layout>
	)
}

export const pageQuery = graphql`
	query FilmsListingQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					fields {
						slug
						layout
					}
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						thumbnail
					}
				}
			}
		}
	}
`