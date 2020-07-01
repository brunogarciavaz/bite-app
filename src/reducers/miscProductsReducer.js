

const initialState = {
	isLoading: false,
	error: null,
	miscArray: []
}
export default function(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_MISC':
			return {...state, isLoading: true}
		case 'FETCH_MISC_SUCCESS':
			return {...state, isLoading: false, miscArray: action.payload}
		case 'FETCH_MISC_ERROR':
			return {...state, isLoading: false, error: action.payload}
		default:
			return {...state}
	}

}
