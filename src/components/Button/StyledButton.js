import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { white, colors } from '../../styles/base/variables'

export const StyledButton = styled.button`
	background-color: transparent;
	border: 1px solid ${white};
	color: ${white};
	cursor: pointer;
	display: inline-block;
	font-size: 1.125rem;
	padding: 1rem 3rem;
	text-align: center;
	transition: background-color 300ms ease, border-color 300ms ease;

	&:hover,
	&:focus {
		background-color: ${colors.bossanova};
		border-color: ${colors.cosmic};
	}
`

export const StyledButtonLink = styled( props => <Link {...props} /> )`
	border: 1px solid ${white};
	color: ${white};
	display: inline-block;
	font-size: 1.125rem;
	padding: 1rem 3rem;
	text-align: center;
	transition: background-color 300ms ease, border-color 300ms ease;

	&:hover,
	&:focus {
		text-decoration: none;
		background-color: ${colors.bossanova};
		border-color: ${colors.cosmic};
	}
`