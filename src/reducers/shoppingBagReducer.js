import { combineState } from '../helpers';

const initialState = {
	totalPrice: null,
	totalNutrients: {protein: null, carbohydrate: null, fats: null, kcal: null},
	orders: [],
}


export default function(state = initialState, action) {
	switch (action.type) {
		case 'ADD_ORDER':
			return {
				...state,
				totalPrice: state.totalPrice + action.payload.orderData.price,
				totalNutrients: combineState(state.totalNutrients, action.payload.orderData.nutrients),
				orders: [...state.orders, action.payload],
			}
		case 'ADD_MISC_PRODUCT':
			return {
				...state,
				totalPrice: state.totalPrice + action.payload.orderData.price,
				totalNutrients: combineState(state.totalNutrients, action.payload.orderData.nutrients),
				orders: [...state.orders, action.payload],
			}
		case 'REMOVE_ORDER':
			return {
				...state,
				totalPrice: state.totalPrice - action.payload.orderData.price,
				totalNutrients: combineState(state.totalNutrients, action.payload.orderData.nutrients, true),
				orders: [...state.orders.filter((order, index) => {	return order.id !== action.payload.id })],
			}
		case 'CLEAR':
			return {...initialState}
		default:
			return state
	}

}
