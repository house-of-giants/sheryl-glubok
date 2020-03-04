import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'

import globalStyles from '../styles/styles'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from '../components/Head'

const GlobalStyle = createGlobalStyle`
	${globalStyles}
`

const Layout = ({ pageTitle, children }) => (
	<div className='app'>
		<GlobalStyle />
		<Helmet>
			<title>Sheryl Glubok | {pageTitle ? `${pageTitle}` : 'Writer, Director, Storyteller'}</title>
		</Helmet>
		<Head />
		<Nav />
		{children}
		<Footer />
	</div>
)

export default Layout
