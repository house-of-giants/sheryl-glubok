import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { css } from 'styled-components'

import { AlexiaTitleLg, AlexiaTitleSm } from '../SVG'
import Film from './Film'

export const AlexiaStyles = css`
	&.alexia {

		& .film-wrap {
			grid-template-columns: 1fr 80px 5fr 1fr 1fr;
			grid-template-rows: 1fr 4fr 2fr;
		}

		& svg:first-of-type {
			grid-column: 1 / span 2;
			grid-row: 1 / span 2;
			height: 40vw;
			max-height: 403px;
			position: relative;
			transform: translateX(110px);
			z-index: 1;
		}

		& svg:last-of-type {
			align-self: end;
			grid-column: 4;
			max-width: 100px;
		}

		& .img {
			grid-column: 2 / -1;
			grid-row: 2 / -1;
			position: relative;
		}
	}
`

const Alexia = () => (
	<StaticQuery
		query={graphql`
			query AlexiaDetail {
				markdownRemark(
					fields: { slug: { eq: "/films/alexia/" } }
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
				<Film title={title} date={release_date} director={directed_by} slug="alexia">
					<AlexiaTitleLg />
					<AlexiaTitleSm />
					<div className="img">
						<img itemProp="image" src="/alexia.jpg" alt="" />
					</div>
				</Film>
			)
		}}
	/>
)

export default Alexia