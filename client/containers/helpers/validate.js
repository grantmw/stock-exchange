import _$ from 'jquery';

export default function validate(values, props){
	_$('.buy-button, .sell-button').css({'pointer-events' : 'auto', 'opacity' : '1.0'});
	_$('.sell-error').html('');
	_$('.buy-error').html('');
	const errors = {};
	console.log(props)
	let askPrice;
	let bidPrice;
	let ownedQuantity = 0;
	let { stock } = props;
	if (stock && stock.askPrice) {
		askPrice = stock.askPrice;
		bidPrice = stock.bidPrice;
		let index = props.stocks.findIndex((item) => item.stock.symbol == props.stock.symbol);
		if (index !== -1) {
			ownedQuantity = props.stocks[index].quantity;
		}
	}
	if (isNaN(values.quantityValue) || values.quantityValue < 1) {
		errors.quantityValue = "Enter a valid quantity";
	}
	if (values.quantityValue % 1 != 0 ) {
		errors.quantityValue = "Enter a whole number";		
	}
	if (props.cash < (askPrice * parseFloat(values.quantityValue)) ) {
		_$('.buy-button').css({'pointer-events' : 'none', 'opacity' : '0.5'});
		_$('.buy-error').html('Insufficient Assets');
	} 
	if (values.quantityValue > ownedQuantity) {
		_$('.sell-button').css({'pointer-events' : 'none', 'opacity' : '0.5'});
		_$('.sell-error').html('Do not have enough shares');
	}
	if (!values.quantityValue) {
		errors.quantityValue = "Enter a quantity"
	}
	return errors
};

