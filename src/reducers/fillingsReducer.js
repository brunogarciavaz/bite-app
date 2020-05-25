

const defaultState = {
	isLoading: false,
	error: null,
	fillingsArray: []
}
export default function(state = defaultState, action) {
	switch (action.type) {
		case 'FETCH_FILLINGS':
			return {...state, isLoading: true}
		case 'FETCH_FILLINGS_SUCCESS':
			return {...state, isLoading: false, fillingsArray: action.payload}
		case 'FETCH_FILLINGS_ERROR':
			return {...state, isLoading: false, error: action.payload}
		default:
			return {...state}
	}

}
