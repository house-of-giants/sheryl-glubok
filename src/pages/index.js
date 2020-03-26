import React from 'react'
import styled from 'styled-components'

import { graphql } from 'gatsby'

import Layout from '../theme/layout'
import Hero from '../components/Hero'
import NavLogo from '../components/Nav/NavLogo'
import AboutCTA from '../components/About/AboutCTA'
import FilmList from '../components/Films/FilmList'

const OxHidden = styled.div`
	overflow-x: hidden;
	overflow-y: visible;
`

export default function Page({ data }) {
	const { markdownRemark: post } = data

	return (
		<Layout>
			<Hero />
			<NavLogo />
			<OxHidden>
				<FilmList />
				<AboutCTA data={ post.frontmatter.home_about } />
			</OxHidden>
		</Layout>
	)
}

export const query = graphql`
	query HomeAboutSection {
		markdownRemark(
			frontmatter: { layout: { eq: "about" } }
		) {
			frontmatter {
				home_about {
					column_one_img
					column_two_img
					column_three_img
					body
					button_label
				}
			}
		}
	}
`