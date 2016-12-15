import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { buyStock } from '../actions/index';
import { sellStock } from '../actions/index';
import NoActiveStock from '../components/no_active_stock';
import $ from 'jquery';

class ActiveStock extends Component {
	
	renderActiveStock() {
		const stock = this.props.stock
		const { handleSubmit } = this.props;
		const quantityValue = this.props.fields.quantityValue;
		let searchError;
		if (this.props.failure) {
			if (this.props.failure.hasOwnProperty('errorType')) {
				if (this.props.failure.errorType === 'searchError') {
					searchError = this.props.failure.message
				}
			}
		}
		if (searchError) {
			return(
				<div>
					{this.props.failure.message}
				</div>
			);
		} else {
			return(
				<div>
					{stock.name} ({stock.symbol})
					<div>
						Bid: $ {stock.bidPrice} | Ask: $ {stock.askPrice}
					</div>
					<form>
						<div className="form-group">
							<input
								type="text"
								className="form-control quantity-input"
								{...quantityValue}
								/>
							<div className="text-help">
								{quantityValue.touched ? quantityValue.error : ""}
							</div>
							<button className="btn btn-primary" onClick={handleSubmit(formValues => this.props.buyStock(parseInt(formValues.quantityValue, 10), this.props.stock, this.props.cash))}>Buy</button>
							<button className="btn btn-primary" onClick={handleSubmit(formValues => this.props.sellStock(parseInt(formValues.quantityValue, 10), this.props.stock, this.props.cash))}>Sell</button>
						</div>
					</form>
				</div>
			);
		}
	}
	render() {
		if (!this.props.stock) {
			return(
				<NoActiveStock message="SELECT A STOCK"/>
			);
		} else {
			return(
				<div className="col-md-2 active-stock-container">
					{this.renderActiveStock()}
				</div>
			);
		}
	}
};

function validate(values){
	const errors = {};
	console.log(typeof values.quantityValue)
	console.log(isNaN(values.quantityValue))
	if (isNaN(values.quantityValue)) {
		errors.quantityValue = "Enter a valid quantity"
	}
	if (values.quantityValue % 1 != 0 ) {
		errors.quantityValue = "Enter a whole number"		
	}
	if (values.quantityValue < 1) {
		errors.quantityValue = "Enter a valid quantity"
	}
	if (!values.quantityValue) {
		errors.quantityValue = "Enter a quantity"
	}
	return errors
};

function mapStateToProps(state) {
	return {
		stock: state.activeStock,
		cash: state.cash,
		failure: state.error
	};
};

export default reduxForm({
	form: 'QuantityForm',
	fields: ['quantityValue'],
	validate
}, mapStateToProps, { buyStock, sellStock })(ActiveStock)