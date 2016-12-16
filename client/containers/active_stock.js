import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { buyStock } from '../actions/index';
import { sellStock } from '../actions/index';
import NoActiveStock from '../components/no_active_stock';
import $ from 'jquery';
import ActiveStockCard from '../components/active_stock_card';
import validate from './helpers/validate';

class ActiveStock extends Component {
	
	renderActiveStock() {
		$('#quanity-form').on('keyup keypress', function(e) {
		  var keyCode = e.keyCode || e.which;
		  if (keyCode === 13) { 
		    e.preventDefault();
		    return false;
		  }
		});
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
					<NoActiveStock message={this.props.failure.message} />
				</div>
			);
		} else {
			return(
				<div>
					<ActiveStockCard name={stock.name} symbol={stock.symbol} bidPrice={stock.bidPrice} askPrice={stock.askPrice} />
					<form id="quanity-form">
						<div className="form-group">
							<input
								type="text"
								className="form-control quantity-input"
								placeholder="Enter Share Quantity"
								{...quantityValue}
								/>
							<div className="text-help">
								{quantityValue.touched ? quantityValue.error : ""}
							</div>
							<div className="button-row">
								<div className="buy-col">
									<button className="btn btn-primary buy-button" onClick={handleSubmit(formValues => this.props.buyStock(parseInt(formValues.quantityValue, 10), this.props.stock, this.props.cash))}>Buy</button>	
									<div className="buy-error"></div>
								</div>
								<div className="sell-col">
									<button className="btn btn-primary sell-button" onClick={handleSubmit(formValues => this.props.sellStock(parseInt(formValues.quantityValue, 10), this.props.stock, this.props.cash))}>Sell</button>
									<div className="sell-error"></div>
								</div>
							</div>
						</div>
					</form>
				</div>
			);
		}
	}
	
	render() {
		if (!this.props.stock) {
			return(
				<div className="col-md-3 active-stock-container">
					<NoActiveStock message="SEARCH FOR A STOCK TO GET STARTED" />
				</div>
			);
		} else {
			return(
				<div className="col-md-3 active-stock-container">
					{this.renderActiveStock()}
				</div>
			);
		}
	}
};


function mapStateToProps(state) {
	return {
		stock: state.activeStock,
		cash: state.cash,
		failure: state.error,
		stocks: state.stocks
	};
};

export default reduxForm({
	form: 'QuantityForm',
	fields: ['quantityValue'],
	validate
}, mapStateToProps, { buyStock, sellStock })(ActiveStock)