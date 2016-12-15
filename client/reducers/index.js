import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ActiveStockReducer from './reducer_active_stock';


const rootReducer = combineReducers({
  form: formReducer,
  activeStock: ActiveStockReducer
});

export default rootReducer;
