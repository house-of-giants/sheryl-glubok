import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { css } from 'styled-components'

import { FishbowlTitle } from '../SVG'
import Film from './Film'

export const FishbowlStyles = css`
	&.welcome-to-the-fishbowl {

		& .film-wrap {
			grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
			grid-template-rows: 3fr 2fr 2fr 1fr;
		}

		& svg {
			grid-column: 1 / span 3;
			grid-row: 2 / span 2;
			position: relative;
			z-index: 1;
		}

		& .img-1,
		& .img-2 {
			position: relative;
		}

		& .img-1 {
			grid-column: 3 / span 2;
			grid-row: 1 / span 3;
			position: relative;
			z-index: 0;
		}

		& .img-2 {
			grid-column: 3 / -1;
			grid-row: 1 / -1;
			position: relative;
			z-index: -1;
		}
	}
`

const Fishbowl = () => (
	<StaticQuery
    query={graphql`
      query FilmDetail {
				markdownRemark(
					fields: { slug: { eq: "/films/welcome-to-the-fishbowl/" } }
				) {
					frontmatter {
						title
						release_date
						directed_by
					}
				}
			}
    `}
    render={data => {
    	const { markdownRemark: post } = data
			const { title, release_date, directed_by } = post.frontmatter

    	return (
				<Film title={title} date={release_date} director={directed_by} slug="welcome-to-the-fishbowl">
					<FishbowlTitle />
					<div className="img-1">
						<img itemProp="image" src="/water.jpg" alt="" />
					</div>
					<div className="img-2">
						<img itemProp="image" src="/water-lg.jpg" alt="" />
					</div>
				</Film>
	  	)
	  }}
	/>
)

export default Fishbowl
