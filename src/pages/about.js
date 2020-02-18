import React from 'react'

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'
import AboutHero from '../components/About/AboutHero'

import { StyledContainer } from '../styles/global/layout'

export default () => (
	<Layout>
		<NavLogo />
		<StyledContainer>
			<AboutHero />
		</StyledContainer>
		<StyledContainer narrow>
			<div className="wrap">
				<h2>Stories</h2>
				<h3>Welcome to the Fishbowl (shooting in Colorado Late Summer 2020)</h3>
				<p>In order to publish her debut novel, a stalled-our writer must flee her domestic life to get a manic author to an awards ceremony in the mountains. Lives, loves, and destiny are all on the line in this screwball comedy about middle age.</p>
				<h3>Lily 'N' Rose</h3>
				<p>Lily stands on the precipice of adolescence. When her best friend Rose abandons her for a new best friend, Lily flees into the wilderness only to confront something even more profound.</p>
				<h3>Sonnet 98</h3>
				<p>Created for John Moore's Denver Sonnets Project,  this short film is a contemporary take on Shakespeare's Sonnet 98, "From you have I been absent in the spring..." a poem about heartbreak, longing, and finding a way forward. Featuring Denver-based actors Maggy Stacy, Matt Block, with music and performance by Sunboy. Shot at Syntax Physic Opera.</p>
				<h3>Alexia</h3>
				<p>On a winter weekend getaway, a woman picks up a musician who ignites her creative passion.</p>
				<h3>Thaw</h3>
				<p>On a winter weekend getaway, a woman picks up a musician who ignites her creative passion.</p>
				<h3>Broken Record – co-written with Donald Rae</h3>
				<p>A broken-hearted recording engineer attempts to reunite a legendary 70s rock band in order to impress his rock journalist ex-girlfriend and win her back.</p>
				<h3>Mona in The Promised Land (based on the novel by Gish Jen)</h3>
				<p>A broken-hearted recording engineer attempts to reunite a legendary 70s rock band in order to impress his rock journalist ex-girlfriend and win her back.</p>
				<h3>Bullet</h3>
				<p>In an accidental shooting, a young woman gets a bullet lodged in her brain. Discovering it’s inoperable but could be fatal any moment, she hits the road with her best friend and together they try to outrun their demons.</p>
				<h3>Vaya Con Dios</h3>
				<p>Sheryl’s very first script, a film noir following a female PI through the mean streets of San Francisco. Hey, we all have to start somewhere.</p>
			</div>
		</StyledContainer>
	</Layout>
)
