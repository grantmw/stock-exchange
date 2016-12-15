import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ActiveStockReducer from './reducer_active_stock';
import StocksReducer from './reducer_stocks';
import CashReducer from './reducer_cash';


const rootReducer = combineReducers({
  form: formReducer,
  activeStock: ActiveStockReducer,
  stocks: StocksReducer,
  cash: CashReducer
});

export default rootReducer;
