import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { animPageDefault } from '../utils/animationDefs'
import { StyledContainer } from '../styles/global/layout'
import Layout from '../theme/layout'

import { AlexiaTitleLg, FishbowlTitle, LilyNRoseTitle, Sonnet98Title, ThawTitle } from '../components/SVG'
import AspectRatioBox from '../components/Content/AspectRatioBox'
import NavLogo from '../components/Nav/NavLogo'
import FilmHero from '../components/Hero/FilmHero'
import Columns from '../components/Content/Columns'
import Team from '../components/Films/Team'

const StyledFilmTitle = styled.div`
	margin: 0 auto;
	max-width: 60%;
`

const MinutesToDuration = (s) => {
	var days = Math.floor(s / 1440);
	s = s - days * 1440;
	var hours = Math.floor(s / 60);
	s = s - hours * 60;

	var dur = "T";
	if (days > 0) {dur += days + "D"};
	if (hours > 0) {dur += hours + "H"};
	dur += s + "M"

	return dur;
}


const FilmTitle = ({ title }) => {
	if ( title === 'Alexia' ) return <AlexiaTitleLg />
	if ( title === 'Welcome to the Fishbowl' ) return <FishbowlTitle />
	if ( title === 'Lily \'N\' Rose' ) return <LilyNRoseTitle />
	if ( title === 'Sonnet 98' ) return <Sonnet98Title />
	if ( title === 'Thaw' ) return <ThawTitle />
	return <h1>{title}</h1>
}

const Film = ({ data }) => {
	const [ isVideo, showVideo ] = useState( false )
	const { markdownRemark: post } = data
	const { html } = post
	const { title, vimeo_url, thumbnail } = post.frontmatter

	return (
		<Layout pageMeta={{ title, thumbnail }}>
			<NavLogo />
			<motion.div variants={animPageDefault} initial="in" animate="normal" exit="out" itemScope itemType="http://schema.org/Movie">
				<StyledContainer>
					<StyledFilmTitle>
						<FilmTitle title={title} />
					</StyledFilmTitle>
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
							<p itemProp="duration" content={MinutesToDuration(121)}>121 Minutes</p>
						</div>
						<div>
							<p ><strong>Written by</strong></p>
							<p itemProp="author" itemScope itemType="http://schema.org/Person">
								<span itemProp="name">Sheryl Glubok</span>
							</p>
						</div>
						<div>
							<p><strong>Directed by</strong></p>
							<p itemProp="director" itemScope itemType="http://schema.org/Person">
								<span itemProp="name">Sheryl Glubok</span>
							</p>
						</div>
						<div>
							<p><strong>Produced by</strong></p>
							<p itemProp="producer" itemScope itemType="http://schema.org/Person">
								<span itemProp="name">Sheryl Glubok</span>
							</p>
							<p itemProp="producer" itemScope itemType="http://schema.org/Person">
								<span itemProp="name">Wesley Matheny</span>
							</p>
						</div>
						<div>
							<p><strong>Starring</strong></p>
							<p itemProp="actor" itemScope itemType="http://schema.org/Person">
								<span itemProp="name">Marina Leo</span>
							</p>
							<p itemProp="actor" itemScope itemType="http://schema.org/Person">
								<span itemProp="name">Aicha Bleers</span>
							</p>
							<p itemProp="actor" itemScope itemType="http://schema.org/Person">
								<span itemProp="name">Grace Dotson</span>
							</p>
							<p itemProp="actor" itemScope itemType="http://schema.org/Person">
								<span itemProp="name">Maggy Stacy</span>
							</p>
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
			</motion.div>
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

Film.propTypes = {
	data: PropTypes.object.isRequired
}

export default Film
