import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

import { StyledStage } from './StyledStage'
import Scene from './Scene'

export const Canvas = () => {
	const canvasRef = useRef(null)

	useEffect( () => {
		const canvas = canvasRef.current
		const scene = new Scene( canvas )
	}, [] )

	return (
		<canvas ref={ canvasRef } id="stage"></canvas>
	)
}

const Stage = () => (
	<StyledStage>
		<Canvas />
	</StyledStage>
)

export default Stage
