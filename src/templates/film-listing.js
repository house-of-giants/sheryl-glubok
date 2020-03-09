import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../theme/layout'
import PostItem from '../components/Blog/PostItem'
import NavLogo from '../components/Nav/NavLogo'

import { StyledBlogContainer } from '../styles/global/layout'

export default class FilmList extends React.Component {
	render() {
		const { edges: posts } = this.props.data.allMarkdownRemark
		const { currentPage, numPages } = this.props.pageContext
		const isFirst = currentPage === 1
		const isLast = currentPage === numPages
		const prevPage = currentPage - 1 === 1 ? "/films" : "/films/" + (currentPage - 1).toString()
		const nextPage = "/films/" + (currentPage + 1).toString()

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
							.map(({ node: post }) =>
								<PostItem key={post.id} post={post} />
							)
						}

						{!isFirst && (
							<Link to={prevPage} rel="prev">
								← Previous Page
							</Link>
						)}
						
						{!isLast && (
							<Link to={nextPage} rel="next">
								Next Page →
							</Link>
						)}
					</div>
				</StyledBlogContainer>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
	query FilmsListingQuery( $skip: Int!, $limit: Int! ) {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { fields: { layout: { eq: "film" } } }
			limit: $limit
			skip: $skip
		) {
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