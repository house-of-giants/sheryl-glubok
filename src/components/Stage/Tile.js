import { useEffect } from 'react'
import { TweenMax as TM, Power2, Power3, Expo } from 'gsap/all'
import * as THREE from 'three'

import { clamp, getRatio, wrap, ev } from './utils'

import vertexShader from '../../glsl/vertexShader.glsl'
import fragmentShader from '../../glsl/fragmentShader.glsl'

const Tile = ( el, scene, duration ) => {
	let isHovering = false
	let mesh;
	// const mainImage = el.querySelector( 'img:first-of-type' )
	// const bgImage = el.querySelector( 'img:last-of-type' )

	let images = []
	let sizes = new THREE.Vector2( 0, 0 )
	let offset = new THREE.Vector2( 0, 0 )

	const clock = new THREE.Clock()

	const mouse = new THREE.Vector2( 0, 0 )

	let scroll = 0
	let prevScroll = 0
	let delta = 0

	// const loader = new THREE.TextureLoader()

	// const preloadImage = ($el) => {
	// 	const image = loader.load($el)
	// 	image.center.set(0.5, 0.5)
	// 	images.push( image )
	// }

	// preloadImage( mainImage )

	// if( bgImage ) {
	// 	preloadImage( bgImage )
	// }

	// const texture = images[0]
	// const hoverTexture = images[1]

	// console.log(images)

	let uniforms = {
		u_alpha: { value: 1 },
		u_map: { type: 't', value: el },
		u_ratio: { value: getRatio( sizes, el.querySelector( 'img:first-of-type' ) ) },
		u_hovermap: { type: 't', value: el },
		u_hoverratio: { value: getRatio( sizes, el.querySelector( 'img:last-of-type' ) ) },
		u_mouse: { value: mouse },
		u_progressHover: { value: 0 },
		u_progressClick: { value: 0 },
		u_time: { value: clock.getElapsedTime() },
		u_res: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
	}

	const bindEvent = () => {
		window.addEventListener( 'mousemove', e => onMouseMove( e ) )
		window.addEventListener( 'scroll', e => onScroll( e ) )
		el.addEventListener( 'mouseenter', e => onPointerEnter( e ) )
		el.addEventListener( 'mouseleave', () => onPointerLeave() )
	}

	const onPointerEnter = e => {
		isHovering = true
		const bg = e.target.dataset.color
		document.body.style.setProperty( '--c-bg', bg )

		if ( !mesh ) return

			TM.to( uniforms.u_progressHover, duration, {
				value: 1,
				ease: Power2.easeInOut,
			} )
	}

	const onPointerLeave = () => {
		if ( !mesh ) return

			TM.to( uniforms.u_progressHover, duration, {
				value: 0,
				ease: Power2.easeInOut,
				onComplete: () => {
					isHovering = false
				},
			} )
	}

	const onScroll = () => {
		getBounds()

		TM.set( mesh.position, {
			x: offset.x,
			y: offset.y,
		} )
	}

	const onMouseMove = e => {
		TM.to(mouse, 0.5, {
			x: e.clientX,
			y: e.clientY,
		})
	}

	const initTile = () => {
		// const texture = mainImage
		// const hoverTexture = bgImage
		getBounds()

		const geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1)

		const material = new THREE.ShaderMaterial({
			uniforms,
			vertexShader,
			fragmentShader,
			transparent: true,
			defines: {
				PI: Math.PI,
				PR: window.devicePixelRatio.toFixed(1),
			},
		})

		mesh = new THREE.Mesh(geometry, material)

		mesh.position.x = offset.x
		mesh.position.y = offset.y

		mesh.scale.set( sizes.x, sizes.y, 1 )

		scene.add( mesh )
	}

	const move = () => {
		getBounds()

		TM.set( mesh.position, {
			x: offset.x,
			y: offset.y,
		} )

		TM.to( mesh.scale, 0.3, {
			x: sizes.x - delta,
			y: sizes.y - delta,
			z: 1,
		} )
	}

	const getBounds = () => {
		const { width, height, left, top } = el.getBoundingClientRect()

		if ( !sizes.equals( new THREE.Vector2( width, height ) ) ) {
			sizes.set( width, height )
		}

		if ( !offset.equals( new THREE.Vector2( left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2 ) ) ) {
			offset.set( left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2 )
		}
	}

	const update = () => {
		delta = Math.abs((scroll - prevScroll) * 2000)

		if ( !mesh ) return

			move()

		prevScroll = scroll

		if (!isHovering) return
			uniforms.u_time.value += clock.getDelta()
	}

	initTile()

	bindEvent()

	return( null )
}

export default Tile