import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'
import AboutHero from '../components/About/AboutHero'

import { StyledContainer } from '../styles/global/layout'
import { animPageDefault } from '../utils/animationDefs'
import { AnimatePresence, motion } from 'framer-motion'

export default function Page({ data }) {
	const { markdownRemark: post } = data
	const { html } = post

	return (
		<Layout pageMeta={{ title: 'About' }}>
			<NavLogo />
			<StyledContainer>
				<AboutHero data={ post.frontmatter } />
			</StyledContainer>
			<StyledContainer narrow>
				<AnimatePresence exitBeforeEnter>
					<motion.div className="wrap" variants={animPageDefault} initial="in" animate="normal" exit="out">
						<div dangerouslySetInnerHTML={{ __html: html }} />
					</motion.div>
				</AnimatePresence>
			</StyledContainer>
		</Layout>
	)
}

Page.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.arrayOf(PropTypes.object).isRequired,
		})
	})
}

export const pageQuery = graphql`
	query AboutPageByPath($slug: String!) {
		markdownRemark(
			fields: {
				slug: { eq: $slug }
			}
			frontmatter: { layout: { eq: "about" } }
		) {
			html
			frontmatter {
				intro
				intro_image
				button_label
				button_link
			}
		}
	}
`