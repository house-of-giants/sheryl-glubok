import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import { animPageDefault } from '../utils/animationDefs'
import { formatDateString } from '../utils/formatDate'

import NavLogo from '../components/Nav/NavLogo'
import StyledSinglePost from '../components/Blog/StyledSinglePost'
import SEO from '../components/SEO'

import { StyledContainer } from '../styles/global/layout'
import Layout from '../theme/layout'
import ResponsiveImg from '../components/Content/ResponsiveImg'

export default function Post({ data, location }) {
	const { markdownRemark: post } = data
	const { html } = post
	const { title, date, thumbnail } = post.frontmatter
	const dateString = formatDateString( date )
	const dateISO = new Date( date.replace( ' ', 'T') + 'Z' )

	const animItem = {
		finish: {
			opacity: 1,
			transition: {
				delay: 0.7,
			}
		},
		start: {
			opacity: 0,
			transition: {
				delay: 0.7,
			}
		}
	}

	return (
		<Layout pageMeta={{ title, thumbnail }} pathname={location.pathname}>
			 <SEO
					title={post.frontmatter.title}
					description={post.frontmatter.description || post.excerpt}
					image={thumbnail}
					pathname={location.pathname}
				/>
			<NavLogo />
			<StyledContainer>
				<StyledSinglePost variants={animPageDefault} initial="in" animate="normal" exit="out" itemScope itemType="https://schema.org/BlogPosting">
					<AnimatePresence exitBeforeEnter>
						<div itemProp="mainEntityOfPage">
							<header className="post-head">
								<div className="meta">
									<motion.h1 variants={animItem} initial="start" animate="finish" exit="start" itemProp="headline">{title}</motion.h1>
									<meta itemProp="author" content="Sheryl Glubok" />
									<div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
										<div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
											<meta itemProp="url" content="/logo.png" />
											<meta itemProp="width" content="600" />
											<meta itemProp="height" content="60" />
										</div>
										<meta itemProp="name" content="Sheryl Glubok" />
									</div>
									<motion.p variants={animItem} initial="start" animate="finish" exit="start" itemProp="datePublished">
										<time dateTime={dateISO}>{dateString}</time>
									</motion.p>
								</div>
								<div className="hero" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
									<ResponsiveImg src={thumbnail} />
									<meta itemProp="url" content={thumbnail} />
									<meta itemProp="width" content="100" />
									<meta itemProp="height" content="100" />
								</div>
								<meta itemProp="dateModified" content={dateISO} />
							</header>
								<motion.div className="wrap -center" variants={animItem} initial="start" animate="finish" exit="start" itemProp="articleBody">
									<Link className="back" to="/blog">&larr; All posts</Link>
									<div dangerouslySetInnerHTML={{ __html: html }} />
									<Link className="back" to="/blog">&larr; All posts</Link>
								</motion.div>
						</div>
					</AnimatePresence>
				</StyledSinglePost>
			</StyledContainer>
		</Layout>
	)
}

Post.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.arrayOf(PropTypes.object).isRequired,
		})
	})
}

export const pageQuery = graphql`
	query BlogPostByPath($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(
			fields: {
				slug: { eq: $slug }
			}
			frontmatter: { layout: { eq: "blog" } }
		) {
			excerpt(pruneLength: 160)
			html
			frontmatter {
				date
				title
				thumbnail
			}
		}
	}
`
