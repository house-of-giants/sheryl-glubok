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
	const { title, vimeo_url, thumbnail, date, anticipated_release, runtime, written_by, produced_by, directed_by, starring, pullquote } = post.frontmatter

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
					<Columns cols="repeat(auto-fit, minmax(341px, 1fr))">
						<div>
							<p><strong>{ anticipated_release ? "Anticipated Release Date" : "Date Released" }</strong></p>
							<p>{ date }</p>
						</div>
						<div>
							<p><strong>Runtime</strong></p>
							<p itemProp="duration" content={MinutesToDuration({ runtime })}>{ runtime } minutes</p>
						</div>
						{ written_by &&
							<div>
								<p><strong>Written by</strong></p>
								{written_by.map( person => (
									<p itemProp="author" itemScope itemType="http://schema.org/Person">
										<span itemProp="name">{ person }</span>
									</p>
								))}
							</div>
						}
						{ directed_by && 
							<div>
								<p><strong>Directed by</strong></p>
								{directed_by.map( person => (
									<p itemProp="director" itemScope itemType="http://schema.org/Person">
										<span itemProp="name">{ person }</span>
									</p>
								))}
							</div>
						}
						{ produced_by && 
							<div>
								<p><strong>Produced by</strong></p>
								{produced_by.map( person => (
									<p itemProp="producer" itemScope itemType="http://schema.org/Person">
										<span itemProp="name">{ person }</span>
									</p>
								))}
							</div>
						}
						{ starring && 
							<div>
								<p><strong>Starring</strong></p>
								{starring.map( person => (
									<p itemProp="actor" itemScope itemType="http://schema.org/Person">
										<span itemProp="name">{ person }</span>
									</p>
								))}
							</div>
						}
					</Columns>
					<Columns cols="2fr 1fr" colGap="4rem">
						{/* @TODO :: Can CMS align images left /right? Or do we need to implement columns */}
						<div dangerouslySetInnerHTML={{ __html: html }} />
						<img src="https://source.unsplash.com/random/341x502" alt="" />
					</Columns>
					{ awards &&
						<Columns cols="repeat(auto-fit, minmax(300px, 1fr))" colGap="2rem" rowGap="2rem">
							{awards.map( award => {
								const url = award.logo_link
								return (
									<a href={ award.logo_link }>
										<img src={ award.logo } alt="" />
									</a>
								)
							})}
						</Columns>
					}
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
					{ pullquote &&
						<blockquote>
							<p>{ pullquote }</p>
						</blockquote>
					}
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
				title
				thumbnail
				vimeo_url
				date(formatString: "MMMM DD, YYYY")
				anticipated_release
				runtime
				written_by
				directed_by
				produced_by
				starring
				pullquote
				awards {
					logo
					logo_link
				}
			}
		}
	}
`

Film.propTypes = {
	data: PropTypes.object.isRequired
}

export default Film
