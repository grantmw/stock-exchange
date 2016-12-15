import { BUY_STOCK } from '../actions/index';
import { SELL_STOCK } from '../actions/index';

export default function(state = [], action) {
	var index;
	if ((action.type == BUY_STOCK) || (action.type == SELL_STOCK)) {
		var index =  state.findIndex((item) => item.stock.symbol == action.payload.stock.symbol)
	}
	const update = (state, changes) => Object.assign({}, state, changes);
	switch (action.type) {
	case BUY_STOCK:
		if (index == -1) {
			return state.concat([action.payload]);		
		} else {
			return state
				.slice(0, index)
				.concat([update(state[index], {quantity: Number(state[index].quantity) + Number(action.payload.quantity)})])
				.concat(state.slice(index + 1));			
		}
	case SELL_STOCK:
		if ((Number(state[index].quantity) - Number(action.payload.quantity)) === 0) {
			return state
				.slice(0, index)
				.concat(state.slice(index + 1));			
		} else {
			return state
				.slice(0, index)
				.concat([update(state[index], {quantity: Number(state[index].quantity) - Number(action.payload.quantity)})])
				.concat(state.slice(index + 1));
		}
	}
	return state;
}