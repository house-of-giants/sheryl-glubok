import React from 'react'
import { createGlobalStyle } from 'styled-components'

import globalStyles from '../styles/styles'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from '../components/Head'

const GlobalStyle = createGlobalStyle`
	${globalStyles}
`

const Layout = ({ pageMeta = {}, children }) => (
	<div className='app'>
		<GlobalStyle />
		<Head pageMeta={pageMeta} />
		<Nav />
		{children}
		<Footer />
	</div>
)

export default Layout
