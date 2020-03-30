export const formatDateString = date => {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
	const dateTime = new Date( date.replace( ' ', 'T') + 'Z' )
	const dateString = `${months[dateTime.getMonth()]} ${dateTime.getDate()}, ${dateTime.getFullYear()}`
	return dateString
}

export const formatDateISO = date => {
	const dateTime = new Date( Date.parse( date ) )
	return dateTime.toISOString()
}