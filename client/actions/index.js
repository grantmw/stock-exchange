import axios from 'axios';
import {reset} from 'redux-form';

export const GET_STOCK = 'GET_STOCK';
export const BUY_STOCK = 'BUY_STOCK';
export const SELL_STOCK = 'SELL_STOCK';
export const ADD_ERROR = 'ADD_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';

export function getStock(symbol) {
	const ROOT = "http://data.benzinga.com/rest/richquoteDelayed?symbols=";
	const url = `${ROOT}${symbol}`;
	const request = axios.get(url);

	return 	(dispatch) => {
		var inValidSearchDispatch = () => { dispatch({ 
							type: ADD_ERROR, 
							payload: "searchError", 
							message: "COULD NOT LOCATE STOCK" }); }
		request
		.then(({data}) => {
			if (data.hasOwnProperty(symbol)) {
				if (data.symbol !== 'error') {
					dispatch({ 
							type: GET_STOCK,
							payload: data, 
							symbol: symbol });
					dispatch(reset('SymbolSearch'));
					dispatch({ type: REMOVE_ERROR});
				} else {
					inValidSearchDispatch();
				}
			} else {
				inValidSearchDispatch();
			}
		})
		.catch(({data}) => {
			dispatch({
				type: ADD_ERROR, 
				payload: "httpError", 
				message: "HTTP Error, Check Network Connection" });
		});
	}
}

export function buyStock(quantity, stock, cash) {
	const quantityAndStock = {
		quantity: quantity,
		stock: stock,
	};
	let valid = true;
	if ((parseFloat(stock.askPrice) * parseFloat(quantity)) > cash){
		valid = false
	}
	return (dispatch) => {
		if (valid) {
			dispatch({ type: BUY_STOCK, payload: quantityAndStock});
			dispatch(reset('QuantityForm'));
			dispatch({ type: REMOVE_ERROR});
		} else {
			dispatch({ 
					type: ADD_ERROR, 
					payload: "quantityError", 
					message: "Insufficient Assets" });
		}
	}
}

export function sellStock(quantity, stock) {
	const quantityAndStock = {
		quantity: quantity,
		stock: stock
	};
	return (dispatch) => {
		dispatch({ type: SELL_STOCK, payload: quantityAndStock});
		dispatch(reset('QuantityForm'));
	}
}
