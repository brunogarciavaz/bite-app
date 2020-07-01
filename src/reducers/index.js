import { combineReducers } from 'redux';
import fillingsReducer from './fillingsReducer'
import currentOrderReducer from './currentOrderReducer'
import shoppingBagReducer from './shoppingBagReducer'
import miscProductsReducer from './miscProductsReducer'




const rootReducer = combineReducers({
	fillings: fillingsReducer,
	currentOrder: currentOrderReducer,
	shoppingBag: shoppingBagReducer,
	miscProducts: miscProductsReducer,
})

export default rootReducer;
