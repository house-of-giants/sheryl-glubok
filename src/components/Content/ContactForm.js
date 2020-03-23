import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import { StyledForm } from '../Form/StyledForm'

const handleLabelActive = e => {
	e.target.parentNode.classList.add( 'is-active' )
}

const handleLabelInactive = e => {
	if( e.target.value === "" ) {
		e.target.parentNode.classList.remove( 'is-active' )
	}
}

const ContactForm = ({ interests = false, invert = false }) => (
	<StyledForm name="contact" method="post" data-netlify="true" action="/thank-you" invert={invert}>
		<input type="hidden" name="form-name" value="contact" />
		<p className="form-group">
			<label htmlFor="name">Name</label>
			<input id="name" type="text" name="name" onFocus={handleLabelActive} onBlur={handleLabelInactive} required />
		</p>
		<p className="form-group">
			<label htmlFor="email">Email</label>
			<input id="email" type="email" name="email" onFocus={handleLabelActive} onBlur={handleLabelInactive} required />
		</p>
		{ interests &&
			<p>
				<label htmlFor="interest">Interested in</label>
				<select id="interest" name="interest[]" multiple>
					<option value="show-film">Showing a Film</option>
					<option value="create-film">Creating a Film with Sheryl</option>
					<option value="chat">Chatting with Sheryl</option>
				</select>
			</p>
		}
		<p className="form-group -textarea">
			<label htmlFor="message">Message</label>
			<textarea id="message" name="message" rows="7"onFocus={handleLabelActive} onBlur={handleLabelInactive}></textarea>
		</p>
		<p>
			<Button isButton type="submit">Send</Button>
		</p>
	</StyledForm>
)

ContactForm.propTypes = {
	interests: PropTypes.bool,
	invert: PropTypes.bool
}

export default ContactForm
