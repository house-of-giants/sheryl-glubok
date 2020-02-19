import React from 'react'
import { StyledButton, StyledButtonLink } from './StyledButton'

const Button = ( { to, children, isButton, onClick } ) => (
	<>
			{isButton ? (
				<StyledButton className="btn" onClick={onClick}>
					{children}
				</StyledButton>
			) : (
				<StyledButtonLink className="btn" to={to}>
					{children}
				</StyledButtonLink>
			) }
	</>
)

export default Button