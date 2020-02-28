export const animPageDefault = {
	in: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	normal: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000 }
		}
	},
	out: {
		y: -50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	}
}