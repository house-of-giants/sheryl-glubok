import React from 'react'
import { TweenMax as TM, Power2 } from 'gsap/all'
import * as THREE from 'three'
// import html2canvas from 'html2canvas'

import { getRatio } from './utils'

import vertexShader from '../../glsl/vertexShader.glsl'
import fragmentShader from '../../glsl/fragmentShader.glsl'

class Tile {
	constructor( el, scene, duration ) {
		this.scene = scene
		this.el = el
		this.duration = duration

		// this.mainImage = html2canvas( el )
		// this.bgImage = html2canvas( el )
		this.sizes = new THREE.Vector2( 0, 0 )
		this.offset = new THREE.Vector2( 0, 0 )

		this.vertexShader = vertexShader
		this.fragmentShader = fragmentShader

		this.clock = new THREE.Clock()

		this.mouse = new THREE.Vector2( 0, 0 )

		this.scroll = 0
		this.prevScroll = 0
		this.delta = 0

		this.initTile()
		this.bindEvent()
	}

	bindEvent() {
		window.addEventListener( 'resize', () => { this.onResize() } )
		window.addEventListener( 'mousemove', e => this.onMouseMove( e ) )
		window.addEventListener( 'scroll', e => this.onScroll( e ) )
		this.el.addEventListener( 'mouseenter', e => this.onPointerEnter( e ) )
		this.el.addEventListener( 'mouseleave', () => this.onPointerLeave() )
	}

	onPointerEnter(e) {
		this.isHovering = true
		const bg = e.target.dataset.color
		document.body.style.setProperty( '--c-bg', bg )

		if ( !this.mesh ) return

		TM.to( this.uniforms.u_progressHover, this.duration, {
			value: 1,
			ease: Power2.easeInOut,
		} )

		console.log(this.uniforms.u_progressHover)
	}

	onPointerLeave() {
		if ( !this.mesh ) return

			TM.to( this.uniforms.u_progressHover, this.duration, {
				value: 0,
				ease: Power2.easeInOut,
				onComplete: () => {
					this.isHovering = false
				},
			} )
	}

	onResize() {
		this.getBounds()

		if ( !this.mesh ) return

		this.mesh.scale.set( this.sizes.x, this.sizes.y, 1 )
		this.uniforms.u_res.value.set( window.innerWidth, window.innerHeight )
	}

	onScroll() {
		this.getBounds()

		TM.set( this.mesh.position, {
			x: this.offset.x,
			y: this.offset.y,
		} )
	}

	onMouseMove( e ) {
		TM.to( this.mouse, 0.5, {
			x: e.clientX,
			y: e.clientY,
		})
	}

	initTile() {
		this.getBounds()

		this.uniforms = {
			u_alpha: { value: 1 },
			u_mouse: { value: this.mouse },
			u_progressHover: { value: 0 },
			u_progressClick: { value: 0 },
			u_time: { value: this.clock.getElapsedTime() },
			u_res: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
		}

		// this.mainImage.then( canvas => {
		// 	let texture = new THREE.CanvasTexture( canvas )
		// 	texture.needsUpdate = true

		// 	let bgTexture = new THREE.CanvasTexture( canvas )
		// 	bgTexture.needsUpdate = true

		// 	this.uniforms.u_map = { type: 't', value: texture }
		// 	this.uniforms.u_ratio = { value: getRatio( this.sizes, texture.image.width ) }
		// 	this.uniforms.u_hovermap = { type: 't', value: bgTexture }
		// 	this.uniforms.u_hoverratio = { value: getRatio( this.sizes, bgTexture.image.width ) }
		// } )

		this.geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1)

		this.material = new THREE.ShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: this.vertexShader,
			fragmentShader: this.fragmentShader,
			transparent: true,
			defines: {
				// PI: Math.PI,
				PR: window.devicePixelRatio.toFixed(1),
			},
		})

		// this.mesh = new THREE.Mesh( this.geometry, this.material )

		// this.material = new THREE.MeshBasicMaterial( { wireframe: true } )
		// this.geometry = new THREE.PlaneGeometry();

		this.mesh = new THREE.Mesh( this.geometry, this.material )

		// this.cssObject = new THREE.CSS3DObject( this.el )

		// this.cssObject.position = this.mesh.position
		// this.cssObject.rotation = this.mesh.rotation

		// this.mesh.position.x = this.offset.x
		// this.mesh.position.y = this.offset.y

		// this.mesh.scale.set( this.sizes.x, this.sizes.y, 1 )

		this.scene.add( this.mesh )
	}

	move() {
		if( !this.mesh ) return
		this.getBounds()

		TM.set( this.mesh.position, {
			x: this.offset.x,
			y: this.offset.y,
		} )

		TM.to( this.mesh.scale, 0.3, {
			x: this.sizes.x - this.delta,
			y: this.sizes.y - this.delta,
			z: 1,
		} )
	}

	update() {
		this.delta = Math.abs( ( this.scroll - this.prevScroll ) * 2000 )

		if ( !this.mesh ) return

		this.move()

		this.prevScroll = this.scroll

		if ( !this.isHovering ) return
		this.uniforms.u_time.value += this.clock.getDelta()
	}

	getBounds() {
		const { width, height, left, top } = this.el.getBoundingClientRect()

		if ( !this.sizes.equals( new THREE.Vector2( width, height ) ) ) {
			this.sizes.set( width, height )
		}

		if ( !this.offset.equals( new THREE.Vector2( left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2 ) ) ) {
			this.offset.set( left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2 )
		}
	}
}

export default Tile