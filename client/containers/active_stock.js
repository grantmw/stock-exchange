import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class ActiveStock extends Component {
	render() {
		if (!this.props.stock) {
			return(
				<div className="col-md-6">
					Select a Stock
				</div>
			);
		}
		return(
			<div className="col-md-6">
				{this.props.stock.name}
			</div>
		);
	}
};

function validate(values, props){
	const errors = {};
	if (!values.quantityValue) {
		errors.quantityValue = "Enter a Quantity"
	}
	return errors;
};

function mapStateToProps(state) {
	return {
		stock: state.activeStock
	};
};

export default reduxForm({
	form: 'QuantityForm',
	fields: ['quantityValue'],
	validate
}, mapStateToProps, null)(ActiveStock)