import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { css } from 'styled-components'

import Film from './Film'

import { ThawTitle } from '../SVG'
import { colors, mq } from '../../styles/base/variables'

export const ThawStyles = css`
	&.thaw {

		& .film-wrap {
			grid-template-columns: 2fr 1fr 30px 1fr 1fr 2fr;
			grid-template-rows: 1fr 30px 1fr 2fr 1fr;

			@media(${mq.bpLarge}) {
				grid-template-columns: 2fr 1fr 80px 1fr 1fr 2fr;
				grid-template-rows: 1fr 80px 1fr 2fr 1fr;
			}
		}

		& svg {
			grid-column: 2 / span 3;
			grid-row: 2 / span 2;
			position: relative;
			z-index: 2;
		}

		& .spacerlol {
			background-color: ${colors.black};
			grid-column: 3 / -1;
			grid-row: 2 / -1;
			position: relative;
			z-index: 0;
		}

		& .img-1,
		& .img-2 {
			position: relative;
		}

		& .img-2 {
			grid-column: 1 / -2;
			grid-row: 1 / -1;
			position: relative;
			z-index: -1;
		}

		& .img-1 {
			grid-column: 4 / -1;
			grid-row: 3 / -1;
			position: relative;
			z-index: 1;
		}
	}
`

const Thaw = () => (
	<StaticQuery
		query={graphql`
			query FilmDetail {
				markdownRemark(
					fields: { slug: { eq: "/films/thaw/" } }
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
				<Film title={title} date={release_date} director={directed_by} slug="thaw">
					<ThawTitle />
					<div className="img-1">
						<img itemProp="image" src="/thaw-2.jpg" alt="" />
					</div>
					<div className="spacerlol"></div>
					<div className="img-2">
						<img itemProp="image" src="/thaw-1.jpg" alt="" />
					</div>
				</Film>
			)
		}}
	/>
)

export default Thaw