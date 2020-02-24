import styled from 'styled-components'

import { colors } from '../../styles/base/variables'

const StyledPostItem = styled.article`
	display: flex;
	flex-direction: column;

	& a {
		color: ${colors.white};
	}

	& .date {
		align-items: center;
		display: flex;
		font-size: 0.875rem;
		padding-bottom: 0;

		&::before {
			background-color: ${colors.white};
			border-radius: 5px;
			content: "";
			display: inline-block;
			height: 21px;
			margin-right: 1rem;
			width: 15px;
		}
	}

	& img {
		height: 100%;
		object-fit: cover;
		width: 100%;
	}
`

export default StyledPostItem