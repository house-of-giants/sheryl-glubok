import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { animPageDefault } from '../../utils/animationDefs'

import Fishbowl from './Fishbowl'
import LilyNRose from './LilyNRose'
import Sonnet98 from './Sonnet98'
import Thaw from './Thaw'
import Alexia from './Alexia'

const OxHidden = styled(motion.div)`
	overflow-x: hidden;
	overflow-y: visible;
`

const FilmList = () => (
	<OxHidden variants={animPageDefault} initial="in" animate="normal" exit="out">
		<Fishbowl />
		<LilyNRose />
		<Sonnet98 />
		<Thaw />
		<Alexia />
	</OxHidden>
)

export default FilmList
