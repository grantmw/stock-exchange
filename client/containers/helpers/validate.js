export default function validate(values, props){
	$('.buy-button, .sell-button').css({'pointer-events' : 'auto', 'opacity' : '1.0'});
	$('.sell-error').html('');
	$('.buy-error').html('');
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
		$('.buy-button').css({'pointer-events' : 'none', 'opacity' : '0.5'});
		$('.buy-error').html('Insufficient Assets');
	} 
	if (values.quantityValue > ownedQuantity) {
		$('.sell-button').css({'pointer-events' : 'none', 'opacity' : '0.5'});
		$('.sell-error').html('Do not have enough shares');
	}
	if (!values.quantityValue) {
		errors.quantityValue = "Enter a quantity"
	}
	return errors
};
