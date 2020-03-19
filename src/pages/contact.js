import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Layout from '../theme/layout'
import NavLogo from '../components/Nav/NavLogo'
import Button from '../components/Button'

import { animPageDefault } from '../utils/animationDefs'
import { StyledContainer } from '../styles/global/layout'
import { StyledForm } from '../components/Form/StyledForm'

const handleLabelActive = e => {
	e.target.parentNode.classList.add( 'is-active' )
}

const handleLabelInactive = e => {
	if( e.target.value === "" ) {
		e.target.parentNode.classList.remove( 'is-active' )
	}
}

export default () => (
	<Layout pageMeta={{ title: 'Contact' }}>
		<NavLogo />
		<StyledContainer>
			<AnimatePresence exitBeforeEnter>
				<motion.div className="wrap" variants={animPageDefault} initial="in" animate="normal" exit="out" >
					<h2>Contact Sheryl</h2>
					<StyledForm name="contact" method="post" data-netlify="true" action="/thank-you">
					  <input type="hidden" name="form-name" value="contact" />
						<p className="form-group">
							<label htmlFor="name">Name</label>
							<input id="name" type="text" name="name" onFocus={handleLabelActive} onBlur={handleLabelInactive} />
						</p>
						<p className="form-group">
							<label htmlFor="email">Email</label>
							<input id="email" type="email" name="email" onFocus={handleLabelActive} onBlur={handleLabelInactive} />
						</p>
						<p>
							<label htmlFor="interest">Interested in</label>
							<select id="interest" name="interest[]" multiple>
								<option value="show-film">Showing a Film</option>
								<option value="create-film">Creating a Film with Sheryl</option>
								<option value="chat">Chatting with Sheryl</option>
							</select>
						</p>
						<p className="form-group -textarea">
							<label htmlFor="message">Message</label>
							<textarea id="message" name="message" rows="7"onFocus={handleLabelActive} onBlur={handleLabelInactive}></textarea>
						</p>
						<p>
							<Button isButton type="submit">Send</Button>
						</p>
					</StyledForm>
				</motion.div>
			</AnimatePresence>
		</StyledContainer>
	</Layout>
)
