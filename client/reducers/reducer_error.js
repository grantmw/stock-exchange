import { ADD_ERROR } from '../actions/index';
import { REMOVE_ERROR } from '../actions/index';

export default function(state = {}, action) {

	switch(action.type) {
		case ADD_ERROR:
			return Object.assign({}, state, { errorType: action.payload, message: action.message })
		case REMOVE_ERROR:
			return {}
	}
	return state;
}

