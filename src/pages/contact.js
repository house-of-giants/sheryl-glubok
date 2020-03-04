import React from 'react'

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'
import Hero from '../components/Hero'

import { StyledContainer } from '../styles/global/layout'
import { animPageDefault } from '../utils/animationDefs'
import { AnimatePresence, motion } from 'framer-motion'

export default () => (
	<Layout pageMeta={{ title: 'Contact' }}>
		<NavLogo />
		<StyledContainer>
			<Hero />
		</StyledContainer>
		<StyledContainer narrow>
			<AnimatePresence>
				<motion.div className="wrap" variants={animPageDefault} initial="in" animate="normal" exit="out" >
					<h2>Contact Sheryl</h2>
					<form name="contact" method="post" data-netlify="true" action="/thank-you">
					  <input type="hidden" name="form-name" value="Contact Form" />
						<p>
							<label>Name: <input type="text" name="name" /></label>   
						</p>
						<p>
							<label>Email: <input type="email" name="email" /></label>
						</p>
						<p>
							<label>Interested in: <select name="interest[]" multiple>
								<option value="show-film">Showing a Film</option>
								<option value="create-film">Creating a Film with Sheryl</option>
								<option value="chat">Chatting with Sheryl</option>
							</select></label>
						</p>
						<p>
							<label>Message: <textarea name="message"></textarea></label>
						</p>
						<p>
							<button type="submit">Send</button>
						</p>
					</form>
				</motion.div>
			</AnimatePresence>
		</StyledContainer>
	</Layout>
)
