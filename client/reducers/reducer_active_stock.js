import { GET_STOCK } from '../actions/index';


export default function(state = null, action) {
	switch(action.type) {
		case GET_STOCK:
			return action.payload[action.symbol]
	}
	return state;
}