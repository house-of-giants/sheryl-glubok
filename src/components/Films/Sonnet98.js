import React from 'react'
import { css } from 'styled-components'

import { Sonnet98Title } from '../SVG'
import Film from './Film'

export const Sonnet98Styles = css`
	&.sonnet-98 {

		& .film-wrap {
			grid-template-columns: 3fr 3fr 40px 3fr 2fr;
			grid-template-rows: 1fr 2fr 3fr 1fr 1fr;
		}

		& svg {
			grid-column: 2 / span 3;
			grid-row: 1 / span 2;
			position: relative;
			z-index: 1;
		}

		& .img-1,
		& .img-2 {
			position: relative;
		}

		& .img-1 {
			grid-column: 1 / span 3;
			grid-row: 2 / span 3;
			position: relative;
			z-index: 0;
		}

		& .img-2 {
			grid-column: 3 / span 3;
			grid-row: 3 / span 3;
			position: relative;
			z-index: -1;
		}
	}
`

const Sonnet98 = () => (
	<Film title="Sonnet 98" date="2016" director="Sheryl Glubok" slug="sonnet-98">
		<Sonnet98Title />
		<div className="img-1">
			<img itemProp="image" src="/sonnet-98-1.jpg" alt="" />
		</div>
		<div className="img-2">
			<img itemProp="image" src="/sonnet-98-2.jpg" alt="" />
		</div>
	</Film>
)

export default Sonnet98