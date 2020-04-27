import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import globalStyles from '../styles/styles'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from '../components/Head'

const GlobalStyle = createGlobalStyle`
	${globalStyles}
`

const defaultMeta = {
	title: 'Writer, Director, Storyteller',
	thumbnail: '/social-image.png',
}

const Layout = ({ pageMeta = defaultMeta, children, pathname }) => (
	<div className='app'>
		<GlobalStyle />
		<Head pageMeta={pageMeta} pathname={pathname} />
		<Nav />
		{children}
		<Footer />
	</div>
)

Layout.propTypes = {
	pageMeta: PropTypes.shape({
		title: PropTypes.string,
		thumbnail: PropTypes.string,
	}),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired
}

export default Layout
