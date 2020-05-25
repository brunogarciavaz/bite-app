
import { combineState } from '../helpers';


// function combineState(state, action, subtract) {
// 	return Object.keys(state)
// 	.reduce(function(newObj, k) {
// 		if (action[k] && typeof action[k] === 'object') {
// 			newObj[k] = combineState(state[k], action[k], subtract)
// 			return newObj
// 		}
// 		newObj[k] = subtract ? (state[k] || 0) - (action[k] || 0) : (state[k] || 0) + (action[k] || 0)
// 		return newObj;
// 	}, {})
//
// }

const initialState = {
  orderData: {
		nutrients: {protein: null, carbohydrate: null, fats: null, kcal: null},
		price: null,
	},
	orderName: null,
	orderType: null,
	orderFillings: [],

}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'NEW_CURRENT_ORDER':
			return {
				...state,
				orderData: combineState(state.orderData, action.payload.data),
				orderType: action.payload.type,
				orderName: action.payload.type,

			}

		case 'ADD_FILLING':
			return {
				...state,
				orderData: combineState(state.orderData, action.payload),
				orderFillings: [...state.orderFillings, action.payload],
			}

		case 'REMOVE_FILLING':
			return {
				...state,
				orderData: combineState(state.orderData, action.payload, true),
				orderFillings: state.orderFillings.filter(order => order.id !== action.payload.id)
			}

		case 'CLEAR_CURRENT_ORDER':
			return initialState
		default:
			return state
	}

}
