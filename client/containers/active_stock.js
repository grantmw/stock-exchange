import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class ActiveStock extends Component {
	
	renderActiveStock() {
		const stock = this.props.stock
		const { handleSubmit } = this.props;
		const quantityValue = this.props.fields.quantityValue;

		return(
			<div>
				<h1>{stock.name} ({stock.symbol})</h1>
				Bid: $ {stock.bidPrice} | Ask: $ {stock.askPrice}
				<form>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							{...quantityValue}
							/>
						<div className="text-help">
							{quantityValue.touched ? quantityValue.error : ""}
						</div>
						<button>Buy</button>
						<button>Sell</button>
					</div>
				</form>
			</div>
		);
	}
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
				{this.renderActiveStock()}
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