import { css } from 'styled-components'
import { styledNormalize } from 'styled-normalize'
import { PrefersReducedMotion, DocStyles, Typography } from './base'

const globalStyles = css`
	${styledNormalize}
	${() => PrefersReducedMotion}
	${() => DocStyles}
	${() => Typography}
`

export default globalStyles;