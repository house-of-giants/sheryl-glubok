import React from 'react'

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'
import FilmList from '../components/Films/FilmList'


const FilmArchive = ({ location }) => (
	<Layout pageMeta={{ title: 'Films' }} pathname={location.pathname}>
		<NavLogo />
		<FilmList />
	</Layout>
)

export default FilmArchive
