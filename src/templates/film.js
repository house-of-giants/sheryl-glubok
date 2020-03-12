import React from 'react'
import { graphql } from 'gatsby'
import { useState } from 'react'

import Layout from '../theme/layout'
import AspectRatioBox from '../components/Content/AspectRatioBox'
import FilmHero from '../components/Hero/FilmHero'
import { FishbowlLogo } from '../components/Films/Fishbowl'
import NavLogo from '../components/Nav/NavLogo'

import { StyledContainer } from '../styles/global/layout'
import Columns from '../components/Content/Columns'
import Team from '../components/Films/Team'

const Film = ({ data }) => {
	const [ isVideo, showVideo ] = useState( false )
	const { markdownRemark: post } = data
	const { html } = post
	const { title, vimeo_url, thumbnail } = post.frontmatter

	return (
		<Layout>
			<NavLogo />
			<StyledContainer>
				{/* @TODO :: Dynamically add the SVG logo for each film */}
				<FishbowlLogo />
				<AspectRatioBox ratio="16/9">
					{ isVideo && vimeo_url
						? <iframe title={title} src={`https://player.vimeo.com/video/${vimeo_url}?autoplay=1`} width="640" height="487" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
						: <FilmHero isVideo={isVideo} showVideo={showVideo} thumbnail={thumbnail} />
					}
				</AspectRatioBox>
				{/* @TODO :: Meta section */}
				<Columns cols="repeat(auto-fit, minmax(341px, 1fr))">
					<div>
						<p><strong>Date Released</strong></p>
						<p>March 22, 2019</p>
					</div>
					<div>
						<p><strong>Runtime</strong></p>
						<p>121 Minutes</p>
					</div>
					<div>
						<p><strong>Written by</strong></p>
						<p>Sheryl Glubok</p>
					</div>
					<div>
						<p><strong>Directed by</strong></p>
						<p>Sheryl Glubok</p>
					</div>
					<div>
						<p><strong>Produced by</strong></p>
						<p>Sheryl Glubok</p>
						<p>Wesley Matheny</p>
					</div>
					<div>
						<p><strong>Starring</strong></p>
						<p>Marina Leo</p>
						<p>Aicha Bleers</p>
						<p>Grace Dotson</p>
						<p>Maggy Stacy</p>
					</div>
				</Columns>
				<Columns cols="2fr 1fr" colGap="4rem">
					{/* @TODO :: Can CMS align images left /right? Or do we need to implement columns */}
					<div dangerouslySetInnerHTML={{ __html: html }} />
					<img src="https://source.unsplash.com/random/341x502" alt="" />
				</Columns>
				{/* @TODO :: Laurels */}
				<Columns cols="repeat(auto-fit, minmax(300px, 1fr))" colGap="2rem" rowGap="2rem">
					<img src="https://source.unsplash.com/random/192x94" alt="" />
					<img src="https://source.unsplash.com/random/192x94" alt="" />
					<img src="https://source.unsplash.com/random/192x94" alt="" />
					<img src="https://source.unsplash.com/random/192x94" alt="" />
					<img src="https://source.unsplash.com/random/192x94" alt="" />
				</Columns>
				{/* @TODO :: Team */}
				<Columns cols="repeat(2, 1fr)" colGap="4rem">
					<Team>
						<img src="https://source.unsplash.com/random/219x222" alt=""/>
						<div className="meta">
							<h3 className="name">Member Name</h3>
							<p className="title">Member position</p>
							<p className="blurb">Short little few line blurb about that member and the awesome work they did on the project!</p>
						</div>
					</Team>
					<Team>
						<img src="https://source.unsplash.com/random/219x222" alt=""/>
						<div className="meta">
							<h3 className="name">Member Name</h3>
							<p className="title">Member position</p>
							<p className="blurb">Short little few line blurb about that member and the awesome work they did on the project!</p>
						</div>
					</Team>
					<Team>
						<img src="https://source.unsplash.com/random/219x222" alt=""/>
						<div className="meta">
							<h3 className="name">Member Name</h3>
							<p className="title">Member position</p>
							<p className="blurb">Short little few line blurb about that member and the awesome work they did on the project!</p>
						</div>
					</Team>
					<Team>
						<img src="https://source.unsplash.com/random/219x222" alt=""/>
						<div className="meta">
							<h3 className="name">Member Name</h3>
							<p className="title">Member position</p>
							<p className="blurb">Short little few line blurb about that member and the awesome work they did on the project!</p>
						</div>
					</Team>
					<Team>
						<img src="https://source.unsplash.com/random/219x222" alt=""/>
						<div className="meta">
							<h3 className="name">Member Name</h3>
							<p className="title">Member position</p>
							<p className="blurb">Short little few line blurb about that member and the awesome work they did on the project!</p>
						</div>
					</Team>
					<Team>
						<img src="https://source.unsplash.com/random/219x222" alt=""/>
						<div className="meta">
							<h3 className="name">Member Name</h3>
							<p className="title">Member position</p>
							<p className="blurb">Short little few line blurb about that member and the awesome work they did on the project!</p>
						</div>
					</Team>
				</Columns>
				{/* :: Pullquote */}
				<blockquote>
					<p>Right on, here's a big ol' pullquote from the content above</p>
				</blockquote>
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

export default Film
