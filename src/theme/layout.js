import React from 'react'

import { createGlobalStyle } from 'styled-components'
import globalStyles from '../styles/styles'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
	${globalStyles}
`

const Layout = ({ children }) => (
	<div className='app'>
		<GlobalStyle />
		<Nav />
		{children}
		<Footer />
	</div>
)

export default Layout
