import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton, StyledButtonLink } from './StyledButton'

const Button = ( { to, children, isButton, onClick, className } ) => (
	<>
			{isButton ? (
				<StyledButton className={`btn ${className}`} onClick={onClick}>
					{children}
				</StyledButton>
			) : (
				<StyledButtonLink className={`btn ${className}`} to={to}>
					{children}
				</StyledButtonLink>
			) }
	</>
)

Button.propTypes = {
	to: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	isButton: PropTypes.bool,
	onClick: PropTypes.func,
}

export default Button