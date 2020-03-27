import React, { useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'
import AboutHero from '../components/About/AboutHero'

import { StyledContainer } from '../styles/global/layout'
import { animPageDefault } from '../utils/animationDefs'
import { AnimatePresence, motion } from 'framer-motion'
import Columns from '../components/Content/Columns'

export default function Page({ data }) {
	const contentEl = useRef( null )
	const { markdownRemark: post } = data
	const { html } = post

	useEffect(() => {
		let imgGroups = []
		const insertAfter = (referenceNode, newNode) => {
			referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
		}
		const images = contentEl.current.querySelectorAll('img');

		images.forEach(img => {
			const nextEl = img.nextElementSibling
			const prevEl = img.previousElementSibling
			const wrapper = document.createElement('div')
			if(nextEl && nextEl.nodeName === 'IMG' ) {
				imgGroups = [img.cloneNode(), nextEl]
				img.remove()
				imgGroups.forEach(imgGroup => wrapper.appendChild(imgGroup))
				wrapper.classList.add(`grid-${imgGroups.length}`)

				insertAfter(prevEl, wrapper)
			}
		} )
	}, [])

	return (
		<Layout pageMeta={{ title: 'About' }}>
			<NavLogo />
			<StyledContainer>
				<AboutHero data={ post.frontmatter } />
			</StyledContainer>
			<StyledContainer>
				<AnimatePresence exitBeforeEnter>
					<motion.div variants={animPageDefault} initial="in" animate="normal" exit="out">
						<Columns cols="1fr" nopad>
							<div className="content" ref={contentEl} dangerouslySetInnerHTML={{ __html: html }} />
						</Columns>
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