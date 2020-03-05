import styled from 'styled-components'
import { colors } from '../../styles/base/variables'

export const StyledForm = styled.form`
	& input,
	& select,
	& textarea {
		background-color: #1a1a1a;
		border: none;
		border-radius: 4px;
		box-shadow: 0 0 33px inset rgba(0, 0, 0, 0.3);
		box-sizing: border-box;
		color: ${colors.white};
		clear: both;
		font-size: 1rem;
		padding: 1rem;
		transition: 300ms border ease;
		width: 100%;

		&:focus {
			border-color: ${colors.white};
			outline: none;
		}
	}

	& .form-group {
		align-items: center;
		display: flex;
		position: relative;

		&.-textarea {
			align-items: flex-top;

			& label {
				top: 1rem;
			}
		}

		& label {
			color: #ccc;
			left: 1rem;
			position: absolute;
			transition: transform 150ms ease-out, font-size 150ms ease-out, left 150ms ease-out, color 150ms ease-out;
		}

		&.is-active {
			& label {
				color: ${colors.cosmic};
				font-size: 1rem;
				left: 0;
				transform: translateY(calc(-125% - 1rem));
			}
		}
	}
`