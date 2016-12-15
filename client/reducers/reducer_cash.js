import { BUY_STOCK } from '../actions/index';
import { SELL_STOCK } from '../actions/index';

export default function(state = 100000, action) {
	switch(action.type) {
		case BUY_STOCK:
			return state - (parseFloat(action.payload.quantity) * parseFloat(action.payload.stock.askPrice));
		case SELL_STOCK:
			return state + (parseFloat(action.payload.quantity) * parseFloat(action.payload.stock.bidPrice));
	}
	return state;
}