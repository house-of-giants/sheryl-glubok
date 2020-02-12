import { useEffect } from 'react'
import * as THREE from 'three'

// import gooeyShader from '../../glsl/gooeyShader.glsl'

import Tile from './Tile'

const perspective = 800

const Scene = ( scene ) => {
	let mainScene
	const container = scene
	const tileEls = document.querySelectorAll( '.film' )

	const ww = window.innerWidth
	const wh = window.innerHeight

	const mouse = new THREE.Vector2( 0, 0 )
	const activeTile = null

	const start = () => {
		let camera;
		mainScene = new THREE.Scene()

		const renderer = new THREE.WebGLRenderer( {
			canvas: container,
			alpha: true,
		} )
		renderer.setSize( ww, wh )
		renderer.setPixelRatio( window.devicePixelRatio )

		const tiles = Array.from( tileEls ).map( (el, i) => new Tile( tileEls[i], mainScene, 0.5 ) )

		const initCamera = () => {
			const fov = ( 180 * ( 2 * Math.atan( wh / 2 / perspective ) ) ) / Math.PI

			camera = new THREE.PerspectiveCamera( fov, ww / wh, 1, 10000 )
			camera.position.set( 0, 0, perspective );
		}

		const initLights = () => {
			const ambientlight = new THREE.AmbientLight(0xffffff, 2)
			mainScene.add( ambientlight )
		}

		const update = () => {
			requestAnimationFrame( update )
			// tiles.forEach( tile => console.log( tile ))
			renderer.render( mainScene, camera )
		}

		initCamera()
		initLights()
		update()
	}

	start()

	return ( null )
}

export default Scene
