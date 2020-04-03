import React from 'react'
import styled from 'styled-components';

import { StyledContainer } from '../../styles/global/layout'
import { colors } from '../../styles/base/variables'

const today = new Date();

const StyledFooter = styled.footer`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding-bottom: 3rem;
	padding-top: 5rem;

	& p {
		font-size: 0.875rem;
	}

	& .social {
		display: flex;
		list-style: none;
	}

	& li {
		padding: 0 1rem;

		&:first-child {
			padding-left: 0;
		}

		&:last-child {
			padding-right: 0;
		}

		& a {
			color: ${colors.white};
			display: block;
			line-height: 0;
			width: 20px;

			&:hover {
				color: ${colors.chateau};
			}
		}
	}

	& svg {
		fill: currentColor;
		max-height: 20px;
		max-width: 20px;
	}
`

const Footer = () => (
	<StyledContainer>
		<StyledFooter>
			<p>Sheryl Glubok &copy; {today.getFullYear()}</p>
			<ul className="social">
				<li><a href="https://www.instagram.com/sherylglubok/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM896 266q-7 0-76.5-.5t-105.5 0-96.5 3-103 10T443 297q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103T297 1349q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103T1495 443q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"/></svg><span className="screen-reader-text">Instagram</span></a></li>
				<li><a href="https://twitter.com/sherylglubok" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5T1369.5 1125 1185 1335.5t-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5T285 1033q33 5 61 5 43 0 85-11-112-23-185.5-111.5T172 710v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5T884 653q-8-38-8-74 0-134 94.5-228.5T1199 256q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></svg><span className="screen-reader-text">Twitter</span></a></li>
				<li><a href="https://vimeo.com/sherylglubok" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M1709 518q-10 236-332 651-333 431-562 431-142 0-240-263-44-160-132-482-72-262-157-262-18 0-127 76l-77-98q24-21 108-96.5T320 359q156-138 241-146 95-9 153 55.5T795 472q44 287 66 373 55 249 120 249 51 0 154-161 101-161 109-246 13-139-109-139-57 0-121 26 120-393 459-382 251 8 236 326z"/></svg><span className="screen-reader-text">Vimeo</span></a></li>
			</ul>
		</StyledFooter>
	</StyledContainer>
)

export default Footer