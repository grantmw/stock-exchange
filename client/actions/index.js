import axios from 'axios';
import {reset} from 'redux-form';

export const GET_STOCK = 'GET_STOCK';
export const BUY_STOCK = 'BUY_STOCK';
export const SELL_STOCK = 'SELL_STOCK';

export function getStock(symbol) {
	const ROOT = "http://data.benzinga.com/rest/richquoteDelayed?symbols=";
	const url = `${ROOT}${symbol}`;
	const request = axios.get(url);

	return 	(dispatch) => {
					request
					.then(({data}) => {
						dispatch({ type: GET_STOCK, payload: data, symbol: symbol });
						dispatch(reset('SymbolSearch'));
					});
			};
};

export function buyStock(quantity, stock) {
	const quantityAndStock = {
		quantity: quantity,
		stock: stock,
	};

	return {
		type: BUY_STOCK,
		payload: quantityAndStock
	};
}

export function sellStock(quantity, stock) {
	const quantityAndStock = {
		quantity: quantity,
		stock: stock
	};

	return {
		type: SELL_STOCK,
		payload: quantityAndStock
	};
}
