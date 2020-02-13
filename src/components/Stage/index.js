import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

import { StyledStage } from './StyledStage'

import Fishbowl from '../Films/Fishbowl'
import LilyNRose from '../Films/LilyNRose'
import Sonnet98 from '../Films/Sonnet98'
import Thaw from '../Films/Thaw'
import Alexia from '../Films/Alexia'
import Scene from './Scene'

const Stage = () =>  {
	const canvasRef = useRef( null )
	const fishbowlRef = useRef( null )
	const lilynroseRef = useRef( null )
	const sonnet98Ref = useRef( null )
	const thawRef = useRef( null )
	const alexiaRef = useRef( null )

	useEffect( () => {
		const canvas = canvasRef.current
		const els = [ fishbowlRef.current ] 
		const scene = new Scene( canvas, els )
	}, [] )

	return (
		<StyledStage>
			<Fishbowl ref={ fishbowlRef } />
			<LilyNRose ref={ lilynroseRef } />
			<Sonnet98 ref={ sonnet98Ref } />
			<Thaw ref={ thawRef } />
			<Alexia ref={ alexiaRef } />
			<canvas ref={ canvasRef } id="stage"></canvas>
		</StyledStage>
	)
}

export default Stage
