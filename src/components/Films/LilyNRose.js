import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { css } from 'styled-components'

import { LilyNRoseTitle } from '../SVG'
import Film from './Film'

export const LilyNRoseStyles = css`
	&.lily-n-rose {

		& .film-wrap {
			grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
			grid-template-rows: 1fr 1fr 7fr;
		}

		& svg {
			grid-column: 2 / span 2;
			grid-row: 1 / span 2;
			position: relative;
			z-index: 1;
		}

		& .img {
			grid-column: 1 / span 5;
			grid-row: 1 / span 4;
			position: relative;
		}
	}
`

const LilyNRose = () => (
	<StaticQuery
		query={graphql`
			query LilyNRoseDetail {
				markdownRemark(
					fields: { slug: { eq: "/films/lily-n-rose/" } }
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
				<Film title={title} date={release_date} director={directed_by} slug="lily-n-rose">
					<LilyNRoseTitle />
					<div className="img">
						<img itemProp="image" src="/lily-n-rose.jpg" alt="" />
					</div>
				</Film>
			)
		}}
	/>
)

export default LilyNRose