import axios from 'axios';

export const GET_STOCK = 'GET_STOCK';

export function getStock(symbol) {
	const ROOT = "http://data.benzinga.com/rest/richquoteDelayed?symbols=";
	const url = `${ROOT}${symbol}`;
	const request = axios.get(url);

	return 	(dispatch) => {
					request
					.then(({data}) => {
						dispatch({ type: GET_STOCK, payload: data, symbol: symbol  })
					});
			};
};

