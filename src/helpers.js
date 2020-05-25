export function combineState(state, action, subtract) {
	return Object.keys(state)
	.reduce(function(newObj, k) {
		if (action[k] && typeof action[k] === 'object') {
			newObj[k] = combineState(state[k], action[k], subtract)
			return newObj
		}
		newObj[k] = subtract ? (state[k] || 0) - (action[k] || 0) : (state[k] || 0) + (action[k] || 0)
		return newObj;
	}, {})

}
