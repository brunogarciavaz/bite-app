import api from '../api/';


export function fetchFillings() {
	const request = api.get('/fillings');
	return (dispatch) => {
		dispatch({type: 'FETCH_FILLINGS'});
		request
		.then(res => dispatch({type: 'FETCH_FILLINGS_SUCCESS', payload: res.data}))
		.catch(err => dispatch({type: 'FETCH_FILLINGS_ERROR', payload: {errorMessage: err.message || 'Something went wrong'} } ) )
	}

}

export function fetchMisc() {
	const request = api.get('/miscProducts');
	return (dispatch) => {
		dispatch({type: 'FETCH_MISC'});
		request
		.then(res => dispatch({type: 'FETCH_MISC_SUCCESS', payload: res.data}))
		.catch(err => dispatch({type: 'FETCH_MISC_ERROR', payload: err}))
	}
}

export function newCurrentOrder(order) {
	const request = api.get(`/mainDishes?name=${order}`);
	return (dispatch) => {
		request
		.then(res => dispatch({type: 'NEW_CURRENT_ORDER', payload: { data: res.data[0], type: order }  }   ))
		.catch(err => dispatch({type: 'NEW_CURRENT_ORDER_ERROR', payload: {errorMessage: err.message || 'Something went wrong'} } ) )
	}

}
export function clearCurrentOrder() {
	return {
		type: 'CLEAR_CURRENT_ORDER',
	}
}


let nextId = 0;
export function addOrder(order) {
	return {
		type: 'ADD_ORDER',
		payload: { ...order, id: nextId++ }
	}
}

export function removeOrder(index) {
	return {
		type: 'REMOVE_ORDER',
		payload: index,
	}
}

export function addFilling(filling) {
	return {
		type: 'ADD_FILLING',
		payload: filling
	}
}

export function removeFilling(filling) {
	return {
		type: 'REMOVE_FILLING',
		payload: filling
	}
}
