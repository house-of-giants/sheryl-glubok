import React, { useState, useRef, useEffect } from 'react'
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
import { AboutFilmTitle } from '../components/SVG/AboutFilmTitle'
import Support from '../components/Content/Support'
import SupportCTA from '../components/Content/SupportCTA'
import Button from '../components/Button'
import ResponsiveImg from '../components/Content/ResponsiveImg'

const StyledFilmTitle = styled.div`
	margin: 0 auto;
	max-width: 60%;

	& svg {
		max-height: 500px;
	}
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
	if ( title === 'Alexia' ) return <AlexiaTitleLg rotate />
	if ( title === 'Welcome to the Fishbowl' ) return <FishbowlTitle />
	if ( title === 'Lily \'N\' Rose' ) return <LilyNRoseTitle />
	if ( title === 'Sonnet 98' ) return <Sonnet98Title />
	if ( title === 'Thaw' ) return <ThawTitle />
	return <h1>{title}</h1>
}

const Film = ({ data, location }) => {
	const [ isVideo, showVideo ] = useState( false )
	const contentEl = useRef( null )
	const { markdownRemark: post } = data
	const { html } = post
	const { title, vimeo_url, thumbnail, release_date, in_production, runtime, written_by, produced_by, directed_by, starring, poster, awards, team } = post.frontmatter
	const hasVideo = vimeo_url ? true : false

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
		<Layout pageMeta={{ title, thumbnail }} pathname={location.pathname}>
			<NavLogo />
			<motion.div variants={animPageDefault} initial="in" animate="normal" exit="out" itemScope itemType="http://schema.org/Movie">
				<StyledContainer>
					<StyledFilmTitle>
						<FilmTitle title={title} />
					</StyledFilmTitle>
					<AspectRatioBox ratio="16/9">
						{ isVideo && vimeo_url
							? <iframe title={title} src={`https://player.vimeo.com/video/${vimeo_url}?autoplay=1`} width="640" height="487" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
							: <FilmHero hasVideo={hasVideo} isVideo={isVideo} showVideo={showVideo} thumbnail={thumbnail} />
						}
					</AspectRatioBox>
					{in_production &&
						<SupportCTA />
					}
					<Columns cols={poster ? '3fr 1fr' : '1fr'} colGap="4rem" separator nopad>
						<Columns className="film-meta" cols="repeat(auto-fit, minmax(285px, 1fr))" colGap="2rem">
							{ written_by.length > 0 && written_by[0].length > 0 &&
								<div className="col">
									<p><strong>Written by</strong></p>
									{written_by.map( person => (
										<p key={person} itemProp="author" itemScope itemType="http://schema.org/Person">
											<span itemProp="name">{ person }</span>
										</p>
									))}
								</div>
							}
							{ directed_by.length > 0 && directed_by[0].length > 0 &&
								<div className="col">
									<p><strong>Directed by</strong></p>
									{directed_by.map( person => (
										<p key={person} itemProp="director" itemScope itemType="http://schema.org/Person">
											<span itemProp="name">{ person }</span>
										</p>
									))}
								</div>
							}
							{ produced_by.length > 0 && produced_by[0].length > 0 &&
								<div className="col">
									<p><strong>Produced by</strong></p>
									{produced_by.map( person => (
										<p key={person} itemProp="producer" itemScope itemType="http://schema.org/Person">
											<span itemProp="name">{ person }</span>
										</p>
									))}
								</div>
							}
							{ starring.length > 0 && starring[0].length > 0 &&
								<div className="col">
									<p><strong>Starring</strong></p>
									{starring.map( person => (
										<p key={person} itemProp="actor" itemScope itemType="http://schema.org/Person">
											<span itemProp="name">{ person }</span>
										</p>
									))}
								</div>
							}
							{ release_date &&
								<div className="col">
									<p><strong>{ in_production ? "Anticipated Release Date" : "Date Released" }</strong></p>
									<p>{ release_date }</p>
								</div>
							}
							{ runtime > 0 &&
								<div className="col">
									<p><strong>Runtime</strong></p>
									<p itemProp="duration" content={MinutesToDuration({ runtime })}>{ runtime } minutes</p>
								</div>
							}
						</Columns>
						{ poster &&
							<ResponsiveImg className="col poster" src={poster} params="ar_5:8,c_lfill/c_scale,w_auto/c_limit,w_385" />
						}
					</Columns>

					<Columns cols="1fr" separator nopad>
						<AboutFilmTitle />
						<div className="content -film" ref={contentEl} dangerouslySetInnerHTML={{ __html: html }} />
					</Columns>

					{/* :: Awards */}
					{ awards.length > 0 &&
						<Columns cols="repeat(auto-fill, minmax(200px, 204px))" colGap="2rem" rowGap="2rem">
							{awards.map( (award, i) => {
								return award.logo_link ?
									<a key={`award-${i}`} href={ award.logo_link }>
										<ResponsiveImg src={award.logo} params="h_144" />
									</a> :
									<ResponsiveImg key={`award-${i}`} src={award.logo} params="h_144" />
							})}
						</Columns>
					}

					{/* :: Team */}
					{ team.length > 0 &&
						<Columns cols="repeat(2, 1fr)" colGap="4rem">
							{team.map( ( { member_headshot, member_name, member_title, member_excerpt } ) => (
								<Team key={member_name}>
									<ResponsiveImg src={member_headshot} alt={member_name} params="ar_1:1,c_fill,g_face/c_scale,w_auto/c_limit,w_220,h_220/" />
									<div className="meta">
										<h3 className="name">{ member_name }</h3>
										{ member_title &&
											<p className="title">{ member_title }</p>
										}
										{ member_excerpt &&
											<p className="blurb">{ member_excerpt }</p>
										}
									</div>
								</Team>
							))}
						</Columns>
					}

					<Button className="mb" to="/films">Back to All Films</Button>

				</StyledContainer>
				{in_production &&
					<Support />
				}
			</motion.div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query FilmPostByPath($slug: String!) {
		markdownRemark(
			fields: {
				slug: { eq: $slug }
			}
			frontmatter: { layout: { eq: "film" } }
		) {
			html
			frontmatter {
				title
				thumbnail
				vimeo_url
				release_date
				in_production
				runtime
				written_by
				directed_by
				produced_by
				starring
				poster
				awards {
					logo
					logo_link
				}
				team {
					member_name
					member_title
					member_excerpt
					member_headshot
				}
			}
		}
	}
`

Film.propTypes = {
	data: PropTypes.object.isRequired
}

export default Film
