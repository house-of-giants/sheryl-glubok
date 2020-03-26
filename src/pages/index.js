import React from 'react'
import styled from 'styled-components'

import Layout from '../theme/layout'
import Hero from '../components/Hero'
import NavLogo from '../components/Nav/NavLogo'
import AboutCTA from '../components/About/AboutCTA'
import FilmList from '../components/Films/FilmList'

const OxHidden = styled.div`
	overflow-x: hidden;
	overflow-y: visible;
`

export default () => (
	<Layout>
		<Hero />
		<NavLogo />
		<OxHidden>
			<FilmList />
			<AboutCTA />
		</OxHidden>
	</Layout>
)
