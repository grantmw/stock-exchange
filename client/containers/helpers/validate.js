export default function validate(values, props){
	const errors = {};
	if (isNaN(values.quantityValue) || values.quantityValue < 1) {
		errors.quantityValue = "Enter a valid quantity";
	}
	if (values.quantityValue % 1 != 0 ) {
		errors.quantityValue = "Enter a whole number";		
	}
	if (!values.quantityValue) {
		errors.quantityValue = "Enter a quantity";
	}
	return errors;
}

