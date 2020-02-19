import React from 'react'
import { css } from 'styled-components'

import Film from './Film'

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
	<Film title="Thaw" date="2014" director="Sheryl Glubok" slug="thaw">
		<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395 167"><path d="M17.25 20.5V90H40.5V20.5H58V.749994H0V20.5h17.25zM101.039.749994V90h22.5V45.375c0-2.8333.417-4.875 1.25-6.125.834-1.25 2.25-1.875 4.25-1.875s3.417.625 4.25 1.875c.834 1.25 1.25 3.2917 1.25 6.125V90h22.5V39c0-3.5-.5-6.4167-1.5-8.75-.916-2.4167-2.208-4.3333-3.875-5.75-1.583-1.4167-3.458-2.4167-5.625-3-2.083-.5833-4.291-.875-6.625-.875-2.75 0-5.583.6667-8.5 2-2.833 1.25-5.208 3.6667-7.125 7.25h-.25V.749994h-22.5zM229.281 76.625c-1.667 0-3-.6667-4-2s-1.5-3.125-1.5-5.375.333-4.0417 1-5.375c.666-1.4167 1.875-2.5417 3.625-3.375 1.666-.75 3.166-1.2083 4.5-1.375 1.416-.25 2.458-.8333 3.125-1.75h.25V65.5c0 3.75-.542 6.5417-1.625 8.375-1.084 1.8333-2.875 2.75-5.375 2.75zM237.656 90h21.75c-.917-1.75-1.5-3.8333-1.75-6.25s-.375-5.2083-.375-8.375v-33c0-4.4167-.667-8-2-10.75-1.25-2.8333-3.084-5.0417-5.5-6.625-2.334-1.6667-5.167-2.7917-8.5-3.375-3.25-.6667-6.834-1-10.75-1-2.584 0-5.375.2917-8.375.875-3 .5-5.792 1.5833-8.375 3.25-2.584 1.5833-4.75 3.875-6.5 6.875-1.75 2.9167-2.625 6.8333-2.625 11.75h19.5c.083-3.5833.625-5.9583 1.625-7.125 1-1.25 2.583-1.875 4.75-1.875 3.833 0 5.75 2.0833 5.75 6.25 0 2.0833-.5 3.7083-1.5 4.875-1 1.0833-2.709 1.9167-5.125 2.5l-8.875 2.125c-3.584.8333-6.584 1.875-9 3.125-2.417 1.1667-4.334 2.625-5.75 4.375-1.417 1.6667-2.459 3.6667-3.125 6-.584 2.3333-.875 5.0833-.875 8.25 0 2.9167.333 5.5833 1 8 .666 2.4167 1.75 4.5 3.25 6.25s3.416 3.0417 5.75 3.875c2.416.9167 5.333 1.375 8.75 1.375 3.5 0 6.583-.75 9.25-2.25 2.75-1.5 4.75-3.75 6-6.75h.25c.166 1.4167.333 2.75.5 4 .166 1.25.458 2.4583.875 3.625zm63.925-67.625L315.331 90h25.5l6.875-47.875h.25L354.831 90h25.5l13.75-67.625h-21.75L366.706 71h-.25l-6.625-48.625h-24L329.206 71h-.25l-5.625-48.625h-21.75zM222.76 151.784V167h2.28v-15.216h5.712v-1.92h-13.704v1.92h5.712zm35.993-1.92V167h2.28v-7.848h9.024V167h2.28v-17.136h-2.28v7.368h-9.024v-7.368h-2.28zm46.373 10.056l2.904-7.992h.048l2.856 7.992h-5.808zm1.704-10.056L300.158 167h2.328l1.92-5.16h7.248l1.872 5.16h2.52l-6.696-17.136h-2.52zM358.73 167l4.584-17.136h-2.28l-3.48 14.256h-.048l-3.792-14.256h-2.472l-3.84 14.256h-.048l-3.36-14.256h-2.328L346.058 167h2.376l3.96-14.4h.048l3.912 14.4h2.376z" fill="#fff"/></svg>
		<div className="img-1">
			<img itemProp="image" src="/thaw-2.jpg" alt="" />
		</div>
		<div className="spacerlol"></div>
		<div className="img-2">
			<img itemProp="image" src="/thaw-1.jpg" alt="" />
		</div>
	</Film>
)

export default Thaw