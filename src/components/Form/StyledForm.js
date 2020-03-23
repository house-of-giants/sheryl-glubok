import styled from 'styled-components'
import { colors } from '../../styles/base/variables'

export const StyledForm = styled.form`
	--bg-color: ${props => props.invert ? '#f5f5f5' : '#1a1a1a'};
	--text-color: ${props => props.invert ? '#000' : colors.white};

	& input,
	& select,
	& textarea {
		background-color: var(--bg-color);
		border: 1px solid var(--bg-color);
		border-radius: 4px;
		${props => props.invert ? '' : 'box-shadow: 0 0 33px inset rgba(0, 0, 0, 0.3)' };
		box-sizing: border-box;
		color: var(--text-color);
		clear: both;
		font-size: 1rem;
		padding: 1rem;
		transition: 300ms border ease;
		width: 100%;

		&:focus {
			background-color: transparent;
			border-color: var(--text-color);
			outline: none;
		}
	}

	& input[type="submit"],
	& button {
		border-color: var(--text-color);
		color: var(--text-color);

		&:hover,
		&:focus {
			color: ${colors.white};
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
			color: var(--text-color);
			font-size: 1.2rem;
			left: 1rem;
			position: absolute;
			transition: transform 150ms ease-out, font-size 150ms ease-out, left 150ms ease-out, color 150ms ease-out;
		}

		&.is-active {
			& label {
				color: var(--text-color);
				font-size: 1.1rem;
				font-weight: 900;
				left: 0;
				transform: translateY(calc(-125% - 1rem));
			}
		}
	}
`