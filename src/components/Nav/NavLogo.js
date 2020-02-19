import React from 'react'
import { Link } from 'gatsby'

import { Logo } from '../SVG/Logo'
import { StyledNavLogo } from './StyledNavLogo'

const NavLogo = () => (
	<StyledNavLogo>
		<Link to="/">
			<Logo />
		</Link>
	</StyledNavLogo>
)

export default NavLogo